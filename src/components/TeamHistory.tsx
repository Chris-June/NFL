import React, { useState } from "react";
import { History, Trophy } from "lucide-react";
import { TeamInfo, SuperBowlGame, ConferenceChampionship } from "../types";
import { achievements } from "../data/achievements";
import { superBowlDetails } from "../data/superBowlDetails";
import { conferenceChampionships } from "../data/conferenceChampionships";
import { SuperBowlModal } from "./SuperBowlModal";
import { ConferenceChampionshipModal } from "./ConferenceChampionshipModal";

interface TeamHistoryProps {
	team: TeamInfo;
}

export function TeamHistory({ team }: TeamHistoryProps) {
	const [selectedSuperBowl, setSelectedSuperBowl] =
		useState<SuperBowlGame | null>(null);
	const [selectedConference, setSelectedConference] =
		useState<ConferenceChampionship | null>(null);

	return (
		<>
			<div className="bg-white rounded-xl shadow-lg p-6">
				{/* Header Section */}
				<div className="flex items-center gap-3 mb-6">
					{/* Icon and Title for Team History */}
					<History className="w-6 h-6 text-purple-600" />
					<h2 className="text-2xl font-bold">Team History</h2>
				</div>

				{/* Achievements Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{Object.entries(achievements).map(([key, achievement]) => (
						<div
							key={achievement.title}
							className="bg-gradient-to-br from-[#041E42] to-[#869397] text-white rounded-lg p-6">
							{/* Achievement Title */}
							<div className="flex items-center gap-2 mb-4">
								<Trophy className="w-5 h-5" />
								<h3 className="text-lg font-semibold">{achievement.title}</h3>
							</div>

							{/* Achievement Value */}
							<div className="text-3xl font-bold mb-4">{achievement.value}</div>

							{/* Super Bowl Details */}
							{"details" in achievement && achievement.details && (
								<div className="mt-4 space-y-2">
									{achievement.details.map(
										(detail: {
											year: number;
											opponent: string;
											score: string;
										}) => (
											<button
												key={detail.year}
												onClick={() => {
													const game = superBowlDetails.find(
														(g: SuperBowlGame) => g.year === detail.year
													);
													if (game) setSelectedSuperBowl(game);
												}}
												className="w-full text-left p-2 rounded bg-white/10 hover:bg-white/20 transition-colors">
												{/* Display Super Bowl Year and Opponent */}
												<div className="flex justify-between items-center">
													<span className="font-medium">{detail.year}</span>
													<span className="text-sm">vs {detail.opponent}</span>
												</div>
												<div className="text-sm text-white/80 mt-1">
													Final: {detail.score}
												</div>
											</button>
										)
									)}
								</div>
							)}

							{/* Conference Championship Details */}
							{"years" in achievement &&
								achievement.years &&
								key === "conferenceChampionships" && (
									<div className="mt-4 space-y-2">
										{achievement.years.map((year: number) => {
											const championship = conferenceChampionships.find(
												(c: ConferenceChampionship) => c.year === year
											);
											if (!championship) return null;

											return (
												<button
													key={year}
													onClick={() => setSelectedConference(championship)}
													className="w-full text-left p-2 rounded bg-white/10 hover:bg-white/20 transition-colors">
													{/* Display Conference Championship Year and Opponent */}
													<div className="flex justify-between items-center">
														<span className="font-medium">{year}</span>
														<span className="text-sm">
															vs {championship.opponent}
														</span>
													</div>
													<div className="text-sm text-white/80 mt-1">
														Final: {championship.score}
													</div>
												</button>
											);
										})}
									</div>
								)}

							{/* Division Titles */}
							{"years" in achievement &&
								achievement.years &&
								key === "divisionTitles" && (
									<div className="text-sm">
										<div className="font-medium mb-2">Championship Years:</div>
										<div className="flex flex-wrap gap-2">
											{achievement.years.map((year: number) => (
												<span
													key={year}
													className="bg-white/10 px-2 py-1 rounded">
													{year}
												</span>
											))}
										</div>
									</div>
								)}
						</div>
					))}
				</div>
			</div>

			{/* Super Bowl Modal */}
			{selectedSuperBowl && (
				<SuperBowlModal
					game={selectedSuperBowl}
					onClose={() => setSelectedSuperBowl(null)}
					teamColors={team.colors}
				/>
			)}

			{/* Conference Championship Modal */}
			{selectedConference && (
				<ConferenceChampionshipModal
					championship={selectedConference}
					onClose={() => setSelectedConference(null)}
					teamColors={team.colors}
				/>
			)}
		</>
	);
}
