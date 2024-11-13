import React from "react";
import { X } from "lucide-react";
import type { Achievement } from "../types";

interface AchievementModalProps {
	achievement: Achievement;
	onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({
	achievement,
	onClose,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
			<div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				<div className="p-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-2xl font-bold text-gray-900">
							{achievement.title}
						</h2>
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700 transition-colors">
							<X size={24} />
						</button>
					</div>

					<div className="space-y-4">
						<div>
							<h3 className="text-lg font-semibold mb-2">Description</h3>
							<p className="text-gray-700">{achievement.description}</p>
						</div>

						{achievement.games && achievement.games.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold mb-2">Key Games</h3>
								<ul className="space-y-2">
									{achievement.games.map(
										(
											game: { year: number; opponent: string; score: string },
											index: number
										) => (
											<li key={index} className="text-gray-700">
												<span className="font-medium">{game.year}</span> - vs{" "}
												{game.opponent} ({game.score})
											</li>
										)
									)}
								</ul>
							</div>
						)}

						{achievement.stats && (
							<div>
								<h3 className="text-lg font-semibold mb-2">Statistics</h3>
								<ul className="space-y-2">
									{Object.entries(achievement.stats).map(
										([key, value], index) => (
											<li key={`${key}-${index}`} className="text-gray-700">
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
