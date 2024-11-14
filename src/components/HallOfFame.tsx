import React from "react";
import { Award, Filter } from "lucide-react";
import { TeamInfo } from "../types"; // 'TeamInfo' includes details about the team, such as team name, colors, and other metadata
import { PlayerCard } from "./PlayerCard";
import { cowboysData } from "../data/cowboys";

interface HallOfFameProps {
	team: TeamInfo; // Information about the team, including colors and other metadata
}

interface Player {
	id: string;
	name: string;
	position: string;
	// Add other player properties here as needed
}

export function HallOfFame({ team }: HallOfFameProps) {
	// Extract unique positions from the list of Hall of Fame players
	const positions = Array.from(
		new Set(cowboysData.hallOfFame.map((player: Player) => player.position))
	);

	return (
		<div className="bg-white rounded-xl shadow-lg p-6">
			{/* Header Section */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-3">
					<Award className="w-6 h-6 text-yellow-500" />
					<h2 className="text-2xl font-bold">Hall of Fame</h2>
				</div>
				{/* Filter Section */}
				<div className="flex items-center gap-2">
					<Filter className="w-5 h-5 text-gray-400" />
					<select className="text-sm border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
						<option value="">All Positions</option>
						{positions.map((position, index) => (
							<option key={index} value={String(position)}>
								{String(position)}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Player Cards Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cowboysData.hallOfFame.map((player: Player) => (
					<PlayerCard
						key={player.id}
						player={player}
						teamColors={team.colors} // Pass team colors for consistent theming
					/>
				))}
			</div>

			{/* Footer Section */}
			<div className="mt-8 text-center text-gray-600">
				<p className="text-sm">
					The Dallas Cowboys have {cowboysData.hallOfFame.length} members in the
					Pro Football Hall of Fame, representing decades of excellence and
					achievement in NFL history.
				</p>
			</div>
		</div>
	);
}

export default HallOfFame;
