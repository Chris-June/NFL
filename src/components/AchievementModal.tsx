import React from "react";
import { X } from "lucide-react";
import type { Achievement } from "../types"; // NOTE: This type is currently not being used; the Achievement type still needs development or implementation.

// Define the props for the AchievementModal component
interface AchievementModalProps {
	achievement: Achievement; // The achievement object with details to be displayed
	onClose: () => void; // Function to close the modal
}

const AchievementModal: React.FC<AchievementModalProps> = ({
	achievement,
	onClose,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
			{/* Background overlay and modal wrapper */}
			<div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				{/* Modal content container */}
				<div className="p-6">
					{/* Header section with title and close button */}
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-bold text-gray-900">
							{/* Display the title of the achievement */}
							{achievement.title}
						</h2>
						<button
							onClick={onClose} // Close the modal when button is clicked
							className="text-gray-500 hover:text-gray-700 transition-colors">
							{/* Icon for the close button */}
							<X size={24} />
						</button>
					</div>

					<div className="space-y-4">
						{/* Description section */}
						<div>
							<h3 className="text-lg font-semibold mb-2">Description</h3>
							<p className="text-gray-700">{achievement.description}</p>
						</div>

						{/* Key games section, displayed only if games data is available */}
						{achievement.games && achievement.games.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold mb-2">Key Games</h3>
								<ul className="space-y-2">
									{/* Iterate over the list of games and display each game's details */}
									{achievement.games.map(
										(
											game: { year: number; opponent: string; score: string },
											index: number
										) => (
											<li key={index} className="text-gray-700">
												{/* Display game year, opponent, and score */}
												<span className="font-medium">{game.year}</span> - vs{" "}
												{game.opponent} ({game.score})
											</li>
										)
									)}
								</ul>
							</div>
						)}

						{/* Statistics section, displayed only if stats data is available */}
						{achievement.stats && (
							<div>
								<h3 className="text-lg font-semibold mb-2">Statistics</h3>
								<ul className="space-y-2">
									{/* Iterate over the statistics object and display key-value pairs */}
									{Object.entries(achievement.stats).map(
										([key, value], index) => (
											<li key={`${key}-${index}`} className="text-gray-700">
												{/* Display stat key and its corresponding value */}
												<span className="font-medium">{key}:</span>{" "}
												{String(value)}
											</li>
										)
									)}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AchievementModal;
