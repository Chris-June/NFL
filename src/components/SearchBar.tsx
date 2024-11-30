import React, { useState, useRef, useEffect, useCallback } from "react";
import { Search, X, User, Trophy, History, Calendar } from "lucide-react";
import { Player } from "../types";
import { currentRoster } from "../data/Conference/NFC/East/Cowboys/currentRoster";
import { achievements } from "../data/Conference/NFC/East/Cowboys/achievements";
import { superBowlDetails } from "../data/Conference/NFC/East/Cowboys/superBowlDetails";
import { conferenceChampionships } from "../data/Conference/NFC/East/Cowboys/conferenceChampionships";

interface SearchResult {
	type: "player" | "achievement" | "game";
	title: string;
	subtitle: string;
	year?: number;
	icon: typeof User | typeof Trophy | typeof History;
	data:
		| Player
		| (typeof achievements)[keyof typeof achievements]
		| (typeof superBowlDetails)[number]
		| (typeof conferenceChampionships)[number];
}

interface SearchBarProps {
	onPlayerClick: (player: Player) => void;
	onGameClick: (
		game:
			| (typeof superBowlDetails)[number]
			| (typeof conferenceChampionships)[number]
	) => void;
	teamColors: {
		primary: string;
		secondary: string;
		accent?: string;
	};
}

export function SearchBar({
	onPlayerClick,
	onGameClick,
	teamColors,
}: SearchBarProps) {
	// State to control whether the search dropdown is open or closed
	const [isOpen, setIsOpen] = useState(false);
	// State to store the search query input by the user
	const [query, setQuery] = useState("");
	// State to store the search results
	const [results, setResults] = useState<SearchResult[]>([]);
	// Ref to track the search bar container for handling outside clicks
	const searchRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Function to handle clicks outside of the search bar to close the dropdown
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Function to handle search logic
	const search = useCallback((searchQuery: string) => {
		if (!searchQuery.trim()) {
			// If query is empty, reset results
			setResults([]);
			return;
		}

		const searchResults: SearchResult[] = [];
		const normalizedQuery = searchQuery.toLowerCase();

		// Search players
		currentRoster.forEach((player) => {
			if (
				player.name.toLowerCase().includes(normalizedQuery) ||
				player.position.toLowerCase().includes(normalizedQuery) ||
				player.number.toString().includes(normalizedQuery)
			) {
				searchResults.push({
					type: "player",
					title: player.name,
					subtitle: `#${player.number} · ${player.position}`,
					icon: User,
					data: player,
				});
			}
		});

		// Search achievements
		Object.entries(achievements).forEach(([key, achievement]) => {
			if (
				achievement.title.toLowerCase().includes(normalizedQuery) ||
				achievement.value.toString().includes(normalizedQuery)
			) {
				searchResults.push({
					type: "achievement",
					title: achievement.title,
					subtitle: `${achievement.value} total`,
					icon: Trophy,
					data: achievement,
				});
			}
		});

		// Search Super Bowl games
		superBowlDetails.forEach((game) => {
			if (
				game.opponent.toLowerCase().includes(normalizedQuery) ||
				game.year.toString().includes(normalizedQuery) ||
				game.score.includes(normalizedQuery)
			) {
				searchResults.push({
					type: "game",
					title: `Super Bowl ${game.year}`,
					subtitle: `vs ${game.opponent} · ${game.score}`,
					year: game.year,
					icon: History,
					data: game,
				});
			}
		});

		// Search Conference Championships
		conferenceChampionships.forEach((game) => {
			if (
				game.opponent.toLowerCase().includes(normalizedQuery) ||
				game.year.toString().includes(normalizedQuery) ||
				game.score.includes(normalizedQuery)
			) {
				searchResults.push({
					type: "game",
					title: `${game.year} NFC Championship`,
					subtitle: `vs ${game.opponent} · ${game.score}`,
					year: game.year,
					icon: History,
					data: game,
				});
			}
		});

		setResults(searchResults);
	}, []);

	// Function to handle click on a search result
	const handleResultClick = (result: SearchResult) => {
		if (result.type === "player") {
			onPlayerClick(result.data as Player);
		} else if (result.type === "game") {
			onGameClick(
				result.data as
					| (typeof superBowlDetails)[number]
					| (typeof conferenceChampionships)[number]
			);
		}
		// Close the search dropdown and reset the query
		setIsOpen(false);
		setQuery("");
	};

	return (
		<div ref={searchRef} className="relative w-full">
			<div className="relative">
				{/* Search Input */}
				<input
					type="text"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						search(e.target.value);
						setIsOpen(true);
					}}
					placeholder="Search players, achievements, and games..."
					className="w-full pl-10 pr-10 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-shadow"
					style={{
						borderColor: `${teamColors.primary}20`,
						boxShadow: isOpen ? `0 0 0 2px ${teamColors.primary}20` : "none",
					}}
				/>
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
				{query && (
					<button
						onClick={() => {
							setQuery("");
							setResults([]);
						}}
						className="absolute right-3 top-1/2 transform -translate-y-1/2">
						<X className="w-4 h-4 text-gray-400" />
					</button>
				)}
			</div>

			{/* Search Results Dropdown */}
			{isOpen && results.length > 0 && (
				<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border max-h-96 overflow-y-auto z-30">
					{results.map((result, index) => (
						<button
							key={index}
							onClick={() => handleResultClick(result)}
							className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left">
							{/* Result Icon */}
							<result.icon className="w-5 h-5 text-gray-400" />
							<div>
								{/* Result Title */}
								<div className="font-medium text-gray-900">{result.title}</div>
								{/* Result Subtitle */}
								<div className="text-sm text-gray-500">{result.subtitle}</div>
							</div>
							{/* Year Indicator for Games */}
							{result.year && (
								<div className="ml-auto flex items-center text-sm text-gray-400">
									<Calendar className="w-4 h-4 mr-1" />
									{result.year}
								</div>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
