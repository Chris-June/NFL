import React from "react";
import { Trophy } from "lucide-react";
import type { TeamInfo, Achievement } from "../types";

// Props interface for HistoricalAchievements component
interface HistoricalAchievementsProps {
	team: TeamInfo; // Information about the team, such as name and colors
	onAchievementClick: (achievement: Achievement) => void; // Callback function to handle clicking an achievement
}

const HistoricalAchievements: React.FC<HistoricalAchievementsProps> = ({
	team,
	onAchievementClick,
}) => {
	// Array of achievements, representing key historical moments for the team
	const achievements: Achievement[] = [
		{
			title: "Super Bowl Championships", // Title of the achievement
			description: `${team.name} Super Bowl victories and memorable championship moments.`, // Description including the team name dynamically
			games: [
				// Array of specific games related to this achievement
				{ year: 1971, opponent: "Miami Dolphins", score: "24-3" },
				{ year: 1977, opponent: "Denver Broncos", score: "27-10" },
			],
			stats: {
				// Statistics associated with the achievement
				"Total Championships": 5,
				"Championship Win Rate": "71%",
			},
		},
		// Add more achievements as needed
	];

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			{/* Header Section */}
			<h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
				<Trophy className="text-yellow-500" />
				Historical Achievements
			</h2>

			{/* Achievements Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{achievements.map((achievement, index) => (
					<div
						key={index} // Unique key for each achievement to help React identify list elements
						onClick={() => onAchievementClick(achievement)} // Call the onAchievementClick function when clicked
						className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
						{/* Achievement Title */}
						<h3 className="font-semibold mb-2">{achievement.title}</h3>
						{/* Achievement Description */}
						<p className="text-sm text-gray-600">{achievement.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default HistoricalAchievements;
