import React, { useState } from "react";
import { Player } from "../types";
import { User, Calendar } from "lucide-react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
        style={{
          borderTop: `4px solid ${teamColors.primary}`,
        }}
      >
        {/* Image Container */}
        <div className="relative h-48 bg-gray-100 flex items-center justify-center">
          {player.imageUrl ? (
            <img
              src={player.imageUrl}
              alt={player.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-16 h-16 text-gray-400" />
          )}
        </div>

        {/* Player Info */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{player.name}</h3>
          <div className="mt-1 space-y-1">
            <p className="text-sm text-gray-600">{player.position}</p>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{player.yearsWithTeam}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <PlayerBackgroundModal
          player={player}
          onClose={() => setShowModal(false)}
          teamColors={teamColors}
        />
      )}
    </>
  );
}
