import React from "react";
import {
	X,
	Trophy,
	User,
	Star,
	Clock,
	MapPin,
	Users,
	Award,
	BarChart2,
} from "lucide-react";
import { ConferenceChampionship } from "../types";

interface ConferenceChampionshipModalProps {
	championship: ConferenceChampionship; // Championship data to be displayed in the modal
	onClose: () => void; // Function to close the modal
	teamColors: {
		primary: string; // Primary team color for styling
		secondary: string; // Secondary team color for styling
	};
}

export function ConferenceChampionshipModal({
	championship,
	onClose,
	teamColors,
}: ConferenceChampionshipModalProps) {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
			<div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div
					className="p-6 sticky top-0 z-10"
					style={{
						background: `linear-gradient(135deg, ${teamColors.primary}, ${teamColors.secondary})`, // Dynamic gradient background using team colors
					}}>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Trophy className="w-8 h-8 text-white" />
							<div>
								{/* Display year and championship details */}
								<h2 className="text-2xl font-bold text-white">
									{championship.year} NFC Championship
								</h2>
								<p className="text-white/80">
									Cowboys vs {championship.opponent}
								</p>
							</div>
						</div>
						<button
							onClick={onClose} // Close the modal when clicked
							className="text-white/80 hover:text-white transition-colors">
							<X className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 space-y-8">
					{/* Season Record */}
					<div className="bg-gray-50 rounded-lg p-6">
						<div className="flex items-center gap-2 mb-4">
							<BarChart2 className="w-6 h-6 text-blue-500" />
							<h3 className="text-xl font-bold">Season Record</h3>
						</div>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								{/* Display number of wins */}
								<div className="text-3xl font-bold text-green-600">
									{championship.seasonRecord.wins}
								</div>
								<div className="text-sm text-gray-600">Wins</div>
							</div>
							<div className="text-center">
								{/* Display number of losses */}
								<div className="text-3xl font-bold text-red-600">
									{championship.seasonRecord.losses}
								</div>
								<div className="text-sm text-gray-600">Losses</div>
							</div>
							<div className="text-center">
								{/* Display division rank */}
								<div className="text-3xl font-bold text-blue-600">
									#{championship.seasonRecord.divisionRank}
								</div>
								<div className="text-sm text-gray-600">Division Rank</div>
							</div>
						</div>
					</div>

					{/* Game Details */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="flex items-center gap-2 mb-2">
								<Trophy className="w-5 h-5 text-yellow-500" />
								<span className="font-semibold">Final Score</span>
							</div>
							{/* Display final score */}
							<p className="text-2xl font-bold">
								{championship.gameStats.finalScore}
							</p>
						</div>
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="flex items-center gap-2 mb-2">
								<MapPin className="w-5 h-5 text-red-500" />
								<span className="font-semibold">Venue</span>
							</div>
							{/* Display venue of the game */}
							<p className="text-lg">{championship.venue}</p>
						</div>
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="flex items-center gap-2 mb-2">
								<Users className="w-5 h-5 text-blue-500" />
								<span className="font-semibold">Attendance</span>
							</div>
							{/* Display attendance */}
							<p className="text-lg">{championship.gameStats.attendance}</p>
						</div>
					</div>

					{/* Key Players */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Star className="w-6 h-6 text-yellow-500" />
							<h3 className="text-xl font-bold">Key Players</h3>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{championship.keyPlayers.map((player, index) => (
								<div key={index} className="bg-gray-50 rounded-lg p-4">
									<div className="flex items-center gap-2 mb-2">
										<User className="w-5 h-5 text-gray-500" />
										{/* Display player's name */}
										<p className="font-semibold">{player.name}</p>
									</div>
									<p className="text-sm text-gray-600 mb-2">
										{player.position}
									</p>
									{/* Display season stats and game stats */}
									<div className="space-y-2">
										<div className="text-sm">
											<span className="font-medium">Season: </span>
											{player.seasonStats}
										</div>
										<div className="text-sm">
											<span className="font-medium">This Game: </span>
											{player.gameStats}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Season Highlights */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Award className="w-6 h-6 text-purple-500" />
							<h3 className="text-xl font-bold">Season Highlights</h3>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							{championship.seasonHighlights.map((highlight, index) => (
								<div key={index} className="bg-gray-50 rounded-lg p-4">
									{/* Display highlight category and description */}
									<p className="font-semibold text-sm text-gray-600 mb-2">
										{highlight.category}
									</p>
									<p>{highlight.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Game Highlights */}
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Clock className="w-6 h-6 text-blue-500" />
							<h3 className="text-xl font-bold">Game Highlights</h3>
						</div>
						<div className="space-y-4">
							{championship.gameHighlights.map((highlight, index) => (
								<div
									key={index}
									className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
									{/* Icon representing the quarter */}
									<div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
										<Clock className="w-6 h-6 text-gray-600" />
									</div>
									<div>
										{/* Display quarter and highlight description */}
										<p className="font-semibold">{highlight.quarter} Quarter</p>
										<p className="text-gray-600">{highlight.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
