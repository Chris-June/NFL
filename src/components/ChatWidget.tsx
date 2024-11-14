import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MessageSquare, X, Send, AlertCircle, Zap } from "lucide-react";
import { getTeamTheme } from "../data/teamColors";
import { useChat } from "../hooks/useChat";
import { mascots } from "../data/mascots";

export const ChatWidget: React.FC = () => {
	// Get the teamId from the URL parameters; default to 'cowboys' if not provided
	const { teamId = "cowboys" } = useParams<{ teamId: string }>();

	// Get the team theme colors based on the teamId
	const theme = getTeamTheme(teamId);
	// Get the mascot information based on the teamId
	const mascot = mascots[teamId];

	// State to track whether the chat widget is open
	const [isOpen, setIsOpen] = useState(false);
	// State to track the user input in the chat widget
	const [input, setInput] = useState("");

	// Custom hook to manage chat messages, partial responses, loading state, etc.
	const {
		messages,
		sendMessage,
		isLoading,
		partialResponse,
		error,
		fallbackMode,
	} = useChat(mascot);

	// Refs to manage scrolling to the end of messages
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	// Function to scroll to the bottom of the chat container
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Scroll to the bottom whenever new messages or partial responses are added
	useEffect(() => {
		scrollToBottom();
	}, [messages, partialResponse]);

	// Handle form submission when the user sends a message
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim() || isLoading) return; // Prevent empty messages or while loading

		const message = input;
		setInput(""); // Clear input field
		await sendMessage(message); // Send the message
	};

	return (
		<>
			{/* Button to open the chat widget */}
			<button
				onClick={() => setIsOpen(true)} // Open the chat widget when clicked
				className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-105"
				style={{ backgroundColor: theme.colors.primary }}>
				<MessageSquare className="w-6 h-6 text-white" />
			</button>

			{/* Chat widget container, displayed if isOpen is true */}
			{isOpen && (
				<div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 flex flex-col">
					{/* Chat header with title and close button */}
					<div
						className="p-4 flex justify-between items-center"
						style={{ backgroundColor: theme.colors.primary }}>
						<div className="flex items-center gap-2">
							<h2 className="text-white font-bold">Chat with {mascot.name}</h2>
							{fallbackMode && (
								// Display fallback mode indication if fallbackMode is true
								<span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
									<Zap className="w-3 h-3" />
									Energy Saving
								</span>
							)}
						</div>
						<button
							onClick={() => setIsOpen(false)} // Close the chat widget when clicked
							className="text-white hover:text-white/80 transition-colors">
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Chat content container with scrollable messages */}
					<div
						ref={chatContainerRef}
						className="flex-1 overflow-y-auto p-4 space-y-4">
						{messages.map((message) => (
							<div
								key={message.id} // Unique key for each message
								className={`flex ${
									message.role === "user" ? "justify-end" : "justify-start" // Align messages based on role
								}`}>
								<div
									className={`max-w-[80%] p-3 rounded-lg ${
										message.role === "user"
											? "bg-blue-500 text-white" // User messages are styled with blue background
											: "bg-gray-100 text-gray-800" // Mascot messages are styled with gray background
									}`}>
									{message.content}
								</div>
							</div>
						))}

						{isLoading && (
							// Display loading indicator while waiting for a response
							<div className="flex justify-start">
								<div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
									{partialResponse || (
										<div className="flex items-center gap-2">
											<div
												className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
												style={{ animationDelay: "0ms" }}
											/>
											<div
												className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
												style={{ animationDelay: "150ms" }}
											/>
											<div
												className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
												style={{ animationDelay: "300ms" }}
											/>
										</div>
									)}
								</div>
							</div>
						)}

						{error && !fallbackMode && (
							// Display error message if there's an error and not in fallback mode
							<div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600">
								<AlertCircle className="w-5 h-5" />
								<span className="text-sm">Service temporarily unavailable</span>
							</div>
						)}

						{/* Ref to help scroll to the end of messages */}
						<div ref={messagesEndRef} />
					</div>

					{/* Form to send a new message */}
					<form onSubmit={handleSubmit} className="p-4 border-t">
						<div className="flex gap-2">
							<input
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)} // Update input value as user types
								placeholder="Type your message..."
								className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
								style={{
									focusRing: theme.colors.primary,
								}}
								disabled={isLoading} // Disable input if loading
							/>
							<button
								type="submit"
								className="p-2 rounded-lg text-white transition-colors hover:opacity-90 disabled:opacity-50"
								style={{ backgroundColor: theme.colors.primary }}
								disabled={isLoading} // Disable button if loading
							>
								<Send className="w-5 h-5" />
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default ChatWidget;
