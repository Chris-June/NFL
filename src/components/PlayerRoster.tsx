import React, { useState, useEffect, useRef, useCallback } from "react";
import { Users, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { TeamInfo } from "../types";
import { PlayerCard } from "./PlayerCard";
import { currentRoster } from "../data/currentRoster";

interface PlayerRosterProps {
	team: TeamInfo;
}

export function PlayerRoster({ team }: PlayerRosterProps) {
	// State to control autoplay functionality
	const [isAutoPlay, setIsAutoPlay] = useState(true);
	// State to track the current slide index
	const [currentIndex, setCurrentIndex] = useState(0);
	// State to track if a slide transition is ongoing
	const [isTransitioning, setIsTransitioning] = useState(false);
	// State to determine how many cards are visible per view based on screen size
	const [cardsPerView, setCardsPerView] = useState(3);
	// Ref to hold the interval ID for autoplay
	const autoPlayRef = useRef<NodeJS.Timeout>();

	// Effect to update the number of cards per view based on screen size
	useEffect(() => {
		const updateCardsPerView = () => {
			if (window.innerWidth >= 1024) {
				setCardsPerView(3);
			} else if (window.innerWidth >= 768) {
				setCardsPerView(2);
			} else {
				setCardsPerView(1);
			}
		};

		updateCardsPerView();
		window.addEventListener("resize", updateCardsPerView);
		return () => window.removeEventListener("resize", updateCardsPerView);
	}, []);

	// Calculate the total number of slides based on the roster length and cards per view
	const totalSlides = Math.ceil(currentRoster.length / cardsPerView);

	// Function to handle moving to the next slide, wrapped in useCallback to prevent unnecessary re-creations
	const handleNext = useCallback(() => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => (prev + 1) % totalSlides);
		setTimeout(() => setIsTransitioning(false), 500); // Delay to manage transition state
	}, [isTransitioning, totalSlides]);

	// Function to handle moving to the previous slide
	const handlePrev = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
		setTimeout(() => setIsTransitioning(false), 500); // Delay to manage transition state
	};

	// Function to toggle autoplay on and off
	const toggleAutoPlay = () => {
		setIsAutoPlay(!isAutoPlay);
	};

	// Effect to manage autoplay functionality
	useEffect(() => {
		if (isAutoPlay) {
			autoPlayRef.current = setInterval(() => {
				handleNext();
			}, 5000); // Move to the next slide every 5 seconds
		}
		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, [isAutoPlay, handleNext]);

	// Function to get the players currently visible based on the current index and cards per view
	const getVisiblePlayers = () => {
		const startIdx = currentIndex * cardsPerView;
		return currentRoster.slice(startIdx, startIdx + cardsPerView);
	};

	return (
		<div className="bg-white rounded-xl shadow-lg p-6">
			{/* Header section with team icon and autoplay controls */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<Users className="w-6 h-6 text-blue-600" />
					<h2 className="text-2xl font-bold">Current Roster</h2>
				</div>

				<div className="flex items-center gap-4">
					<button
						onClick={toggleAutoPlay}
						className="p-2 rounded-full hover:bg-gray-100 transition-colors"
						aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}>
						{isAutoPlay ? (
							<Pause className="w-5 h-5 text-gray-600" />
						) : (
							<Play className="w-5 h-5 text-gray-600" />
						)}
					</button>

					<div className="flex items-center gap-2">
						<button
							onClick={handlePrev}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
							aria-label="Previous players"
							disabled={isTransitioning} // Disable button during transition
						>
							<ChevronLeft className="w-6 h-6 text-gray-600" />
						</button>
						<button
							onClick={handleNext}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
							aria-label="Next players"
							disabled={isTransitioning} // Disable button during transition
						>
							<ChevronRight className="w-6 h-6 text-gray-600" />
						</button>
					</div>
				</div>
			</div>

			{/* Player cards display section */}
			<div className="relative overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{getVisiblePlayers().map((player) => (
						<div
							key={player.id}
							className={`transition-all duration-500 ${
								isTransitioning ? "opacity-50" : "opacity-100"
							}`}>
							<PlayerCard player={player} teamColors={team.colors} />
						</div>
					))}
				</div>

				{/* Progress Indicators */}
				<div className="flex justify-center mt-6 gap-2">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							onClick={() => {
								if (!isTransitioning) {
									setIsTransitioning(true);
									setCurrentIndex(index);
									setTimeout(() => setIsTransitioning(false), 500);
								}
							}}
							className={`w-2 h-2 rounded-full transition-colors ${
								index === currentIndex ? "bg-blue-600" : "bg-gray-300"
							}`}
							aria-label={`Go to slide ${index + 1}`}
							disabled={isTransitioning} // Disable button during transition
						/>
					))}
				</div>
			</div>
		</div>
	);
}
