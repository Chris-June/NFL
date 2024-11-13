import React from 'react';
import { Trophy } from 'lucide-react';
import type { TeamInfo, Achievement } from '../types';

interface HistoricalAchievementsProps {
  team: TeamInfo;
  onAchievementClick: (achievement: Achievement) => void;
}

const HistoricalAchievements: React.FC<HistoricalAchievementsProps> = ({ team, onAchievementClick }) => {
  const achievements: Achievement[] = [
    {
      title: "Super Bowl Championships",
      description: `${team.name} Super Bowl victories and memorable championship moments.`,
      games: [
        { year: 1971, opponent: "Miami Dolphins", score: "24-3" },
        { year: 1977, opponent: "Denver Broncos", score: "27-10" },
      ],
      stats: {
        "Total Championships": 5,
        "Championship Win Rate": "71%"
      }
    },
    // Add more achievements as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Trophy className="text-yellow-500" />
        Historical Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            onClick={() => onAchievementClick(achievement)}
            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold mb-2">{achievement.title}</h3>
            <p className="text-sm text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalAchievements;