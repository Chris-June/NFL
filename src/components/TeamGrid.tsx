import React from "react";
import { nflTeams } from "../data/nflTeams";
import { Shield, Trophy } from "lucide-react";

export function TeamGrid() {
	return (
		<section id="teams" className="py-20 px-4 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				{/* Header Section for NFL Teams */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<Trophy className="w-8 h-8 text-[#013369]" />
						<h2 className="text-4xl font-bold text-[#013369]">NFL Teams</h2>
					</div>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Explore comprehensive team statistics, player profiles, and
						historical achievements
					</p>
				</div>

				{/* Loop through each conference and its divisions */}
				{Object.entries(nflTeams).map(([conference, divisions]) => (
					<div key={conference} className="mb-16">
						{/* Conference Title */}
						<h2 className="text-3xl font-bold text-[#013369] mb-8 text-center">
							{conference}
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
							{/* Loop through each division within the conference */}
							{Object.entries(divisions).map(([division, teams]) => (
								<div key={division} className="space-y-4">
									{/* Division Title */}
									<div className="flex items-center gap-2">
										<Shield className="w-5 h-5 text-[#013369]" />
										<h3 className="text-xl font-bold text-[#013369]">
											{division}
										</h3>
									</div>
									<div className="grid gap-4">
										{/* Loop through each team in the division */}
										{teams.map((team) => (
											<a
												key={team.id}
												href={`/team/${team.id}`}
												className="block bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
												{/* Team Card with Gradient Background */}
												<div
													className="p-6"
													style={{
														background: `linear-gradient(135deg, ${team.colors.primary}, ${team.colors.secondary})`,
													}}>
													<div className="text-white">
														<div className="flex items-center justify-between mb-2">
															<Shield className="w-6 h-6" />
															<span className="text-sm font-medium opacity-75">
																{conference} {division}
															</span>
														</div>
														{/* Team City and Name */}
														<h4 className="text-lg font-bold mb-1">
															{team.city}
														</h4>
														<p className="text-2xl font-bold">{team.name}</p>
													</div>
												</div>
												{/* View Details Section */}
												<div className="bg-white px-6 py-4">
													<div className="flex items-center justify-between text-sm text-gray-600">
														<span>View Details</span>
														<Trophy className="w-4 h-4" />
													</div>
												</div>
											</a>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
