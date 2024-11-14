import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TeamHero } from "../components/TeamHero";
import { Header } from "../components/Header";
import { StandingsCard } from "../components/StandingsCard";
import { PlayerRoster } from "../components/PlayerRoster";
import { HallOfFame } from "../components/HallOfFame";
import { TeamHistory } from "../components/TeamHistory";
import { ChatWidget } from "../components/ChatWidget"; // Updated to correctly reference the ChatWidget component
import { SearchBar } from "../components/SearchBar";
import { PlayerBackgroundModal } from "../components/PlayerBackgroundModal";
import { SuperBowlModal } from "../components/SuperBowlModal";
import { ConferenceChampionshipModal } from "../components/ConferenceChampionshipModal";
import { teamData } from "../data/teams";
import { Player, SuperBowlGame, ConferenceChampionship, Team } from "../types"; // This import statement includes types that are not used yet.
// Ensure the corresponding components are built.

export function TeamPage() {
	// Get the team ID from the URL parameters
	const { teamId } = useParams<{ teamId: string }>();
	// Find the team based on the team ID
	const team: Team | undefined = teamData.find((t: Team) => t.id === teamId);

	// State to manage the currently selected player, Super Bowl, or conference championship
	const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
	const [selectedSuperBowl, setSelectedSuperBowl] =
		useState<SuperBowlGame | null>(null);
	const [selectedConference, setSelectedConference] =
		useState<ConferenceChampionship | null>(null);

	// If no team is found, show a 'Team Not Found' message
	if (!team) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">
						Team Not Found
					</h1>
					<p className="text-gray-600">
						The team you're looking for doesn't exist.
					</p>
					<a
						href="/"
						className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
						Return to Home
					</a>
				</div>
			</div>
		);
	}

	// Handle clicking on a game (either a Super Bowl or Conference Championship)
	const handleGameClick = (game: SuperBowlGame | ConferenceChampionship) => {
		// Determine the type of game by checking if it has an 'mvp' field (Super Bowl)
		if ("mvp" in game) {
			setSelectedSuperBowl(game);
		} else {
			setSelectedConference(game);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header component for the page, showing team-specific information */}
			<Header team={team} />
			{/* Hero section to display major team-related content, like a banner */}
			<TeamHero team={team} />

			<main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
				{/* Search Bar section */}
				<div className="max-w-2xl mx-auto">
					<SearchBar
						onPlayerClick={setSelectedPlayer} // Set selected player when a player is clicked
						onGameClick={handleGameClick} // Handle game click events
						teamColors={team.colors} // Pass team colors for consistent styling
					/>
				</div>

				{/* Current Season Standings Section */}
				<section id="current-season">
					<StandingsCard
						stats={{
							wins: team.stats.wins,
							losses: team.stats.losses,
							ties: team.stats.ties,
							pointsFor: team.stats.pointsFor,
							pointsAgainst: team.stats.pointsAgainst,
							divisionRank: team.stats.divisionRank,
						}}
						title="Current Season"
					/>
				</section>

				{/* Player Roster Section */}
				<section id="players">
					<PlayerRoster team={team} />
				</section>

				{/* Hall of Fame Section */}
				<section id="hall-of-fame">
					<HallOfFame team={team} />
				</section>

				{/* Team History Section */}
				<section id="history">
					<TeamHistory team={team} />
				</section>
			</main>

			{/* Chat Widget to allow interaction */}
			<ChatWidget team={team} />

			{/* Modal for showing player background details */}
			{selectedPlayer && (
				<PlayerBackgroundModal
					player={selectedPlayer} // Player to display in the modal
					onClose={() => setSelectedPlayer(null)} // Close the modal by setting selectedPlayer to null
					teamColors={team.colors} // Styling based on team colors
				/>
			)}

			{/* Modal for showing Super Bowl game details */}
			{selectedSuperBowl && (
				<SuperBowlModal
					game={selectedSuperBowl} // Super Bowl game to display in the modal
					onClose={() => setSelectedSuperBowl(null)} // Close the modal by setting selectedSuperBowl to null
					teamColors={team.colors} // Styling based on team colors
				/>
			)}

			{/* Modal for showing Conference Championship details */}
			{selectedConference && (
				<ConferenceChampionshipModal
					championship={selectedConference} // Conference Championship to display in the modal
					onClose={() => setSelectedConference(null)} // Close the modal by setting selectedConference to null
					teamColors={team.colors} // Styling based on team colors
				/>
			)}
		</div>
	);
}
