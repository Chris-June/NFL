import React, { useState } from "react";
import { Player } from "../types";
import { User, Hash, Award, Calendar, Trophy } from "lucide-react";
import { PlayerBackgroundModal } from "./PlayerBackgroundModal";

interface PlayerCardProps {
	player: Player;
	teamColors: {
		primary: string;
		secondary: string;
		accent?: string;
	};
}

export function PlayerCard({ player, teamColors }: PlayerCardProps) {
	// State to control the visibility of the player background modal
	const [showBackground, setShowBackground] = useState(false);

	return (
		<>
			{/* Player card container with styling and click handler to show the modal */}
			<div
				className="bg-gradient-to-br from-[#041E42] to-[#869397] text-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
				onClick={() => setShowBackground(true)}>
				{/* Player image section with a gradient overlay */}
				<div className="h-48 overflow-hidden relative flex items-center justify-center">
					<img
						src={player.imageUrl} // Player's image
						alt={player.name} // Alt text for accessibility
						className="w-32 h-32 object-cover rounded-full border-4 border-white"
					/>
					{/* Gradient overlay for the player image */}
					<div className="absolute inset-0 bg-gradient-to-t from-[#041E42]/80 to-transparent" />
				</div>
				{/* Player details section */}
				<div className="p-6">
					{/* Player name and number */}
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-2">
							<User className="w-5 h-5 text-gray-200" />
							<h3 className="text-xl font-bold">{player.name}</h3>
						</div>
						<div className="flex items-center gap-2">
							<Hash className="w-5 h-5 text-gray-200" />
							<span className="text-lg font-semibold">#{player.number}</span>
						</div>
					</div>
					{/* Player position */}
					<div className="flex items-center gap-2 mb-4">
						<Award className="w-5 h-5 text-gray-200" />
						<p className="text-gray-200">{player.position}</p>
					</div>

					{/* Career statistics and achievements if available */}
					{player.careerStats ? (
						<>
							<div className="mb-4">
								{/* Career years */}
								<div className="flex items-center gap-2 mb-2">
									<Calendar className="w-4 h-4 text-gray-200" />
									<span className="text-gray-200">
										{player.careerStats.years}
									</span>
								</div>
								{/* Player achievements */}
								<div className="flex flex-wrap gap-2 mb-4">
									{player.careerStats.achievements.map(
										(achievement: string, index: number) => (
											<div
												key={`${achievement}-${index}`}
												className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-sm">
												<Trophy className="w-3 h-3" />
												<span>{achievement}</span>
											</div>
										)
									)}
								</div>
							</div>
							{/* Career statistics */}
							<div className="grid grid-cols-2 gap-4 text-sm">
								{Object.entries(player.careerStats.stats).map(
									([key, value], index) => (
										<div
											key={`${key}-${index}`}
											className="bg-white/10 rounded-lg p-3">
											<span className="text-gray-200 block mb-1">{key}</span>
											<span className="font-semibold text-lg">
												{String(value)}
											</span>
										</div>
									)
								)}
							</div>
						</>
					) : player.stats ? (
						// Display player stats if career stats are not available
						<div className="grid grid-cols-2 gap-4 text-sm">
							{Object.entries(player.stats).map(([key, value], index) => (
								<div
									key={`${key}-${index}`}
									className="bg-white/10 rounded-lg p-3">
									<span className="text-gray-200 block mb-1">{key}</span>
									<span className="font-semibold text-lg">{String(value)}</span>
								</div>
							))}
						</div>
					) : null}
				</div>
			</div>

			{/* Player background modal - displays additional information about the player */}
			{showBackground && (
				<PlayerBackgroundModal
					player={player}
					onClose={() => setShowBackground(false)} // Close handler for the modal
					teamColors={teamColors} // Team colors to style the modal
				/>
			)}
		</>
	);
}
