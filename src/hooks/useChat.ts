import { useState, useCallback } from "react";
import { openai } from "../lib/openai";
import { ChatMessage, TeamMascot } from "../types";

const FALLBACK_RESPONSES = [
	"I can tell you all about our legendary players, historic victories, and team records!",
	"Want to hear about our 5 Super Bowl victories? Or maybe some stats about your favorite Cowboys player?",
	"From Roger Staubach to Troy Aikman, I know all about Cowboys history. What would you like to learn?",
	"Did you know the Cowboys have 8 NFC Championships? I'd love to share more interesting facts!",
];

export function useChat(mascot: TeamMascot) {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			id: "1",
			role: "assistant",
			content: `Welcome to America's Team! 🌟\n\nHowdy, y'all! I'm ${mascot.name}, the official mascot of the Dallas Cowboys, and I'm thrilled to have you here at The Star! Whether you're a lifelong member of Cowboys Nation or just getting to know us, I'm here to share everything about our incredible team - from our 5 Super Bowl victories to the latest stats and stories.\n\nWhat would you like to know about the Cowboys? I've got more tales than a Texas campfire! 🤠`,
			timestamp: new Date(),
		},
	]);
	const [isLoading, setIsLoading] = useState(false);
	const [partialResponse, setPartialResponse] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [fallbackMode, setFallbackMode] = useState(false);

	const getFallbackResponse = () => {
		const randomIndex = Math.floor(Math.random() * FALLBACK_RESPONSES.length);
		return FALLBACK_RESPONSES[randomIndex];
	};

	const handleError = useCallback((error: unknown) => {
		console.error("Error sending message:", error);
		setFallbackMode(true);

		let errorMessage = getFallbackResponse();
		if (typeof error === "object" && error !== null && "error" in error) {
			const errorObj = error as { error: { code?: string }; status?: number };
			if (
				errorObj.error?.code === "insufficient_quota" ||
				errorObj.status === 429
			) {
				errorMessage =
					"I'm in energy-saving mode, but I can still tell you all about Cowboys history, stats, and memorable moments! What would you like to know? 🏈";
			}
		}

		return {
			id: Date.now().toString(),
			role: "assistant",
			content: errorMessage,
			timestamp: new Date(),
		};
	}, []);

	const sendMessage = useCallback(
		async (content: string) => {
			if (!content.trim() || isLoading) return;

			const userMessage: ChatMessage = {
				id: Date.now().toString(),
				role: "user",
				content,
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, userMessage]);
			setIsLoading(true);
			setPartialResponse("");
			setError(null);

			try {
				if (fallbackMode) {
					throw new Error("In fallback mode");
				}

				const response = await openai.chat.completions.create({
					model: "gpt-4-o-mini",
					messages: [
						{ role: "system", content: mascot.prompt },
						...messages.map((msg) => ({
							role: msg.role,
							content: msg.content,
						})),
						{ role: "user", content },
					],
					temperature: 0.7,
					max_tokens: 500,
					stream: true,
				});

				let fullResponse = "";

				for await (const chunk of response) {
					const content = chunk.choices[0]?.delta?.content || "";
					fullResponse += content;
					setPartialResponse(fullResponse);
				}

				const assistantMessage: ChatMessage = {
					id: (Date.now() + 1).toString(),
					role: "assistant",
					content: fullResponse,
					timestamp: new Date(),
				};

				setMessages((prev) => [...prev, assistantMessage]);
				setPartialResponse("");
			} catch (error: unknown) {
				const errorMessage = handleError(error);
				setMessages((prev) => [...prev, errorMessage]);
				setError((error as Error)?.message || "An error occurred");
			} finally {
				setIsLoading(false);
			}
		},
		[messages, mascot.prompt, fallbackMode, handleError, isLoading]
	);

	return {
		messages,
		sendMessage,
		isLoading,
		partialResponse,
		error,
		fallbackMode,
	};
}
