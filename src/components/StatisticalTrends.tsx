import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Trophy, Target, Activity } from 'lucide-react';
import { StatisticalTrend } from '../types/nfl';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface StatisticalTrendsProps {
  trends: StatisticalTrend[];
  team1Name: string;
  team2Name: string;
  team1Color: string;
  team2Color: string;
}

export function StatisticalTrends({ trends, team1Name, team2Name, team1Color, team2Color }: StatisticalTrendsProps) {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
  };

  const winPercentageData = {
    labels: trends.map(t => t.period),
    datasets: [
      {
        label: 'Win Percentage',
        data: trends.map(t => t.stats.winPercentage),
        borderColor: team1Color,
        backgroundColor: `${team1Color}20`,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const scoringData = {
    labels: trends.map(t => t.period),
    datasets: [
      {
        label: 'Points Scored',
        data: trends.map(t => t.stats.averagePointsScored),
        borderColor: team1Color,
        backgroundColor: `${team1Color}20`,
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Points Allowed',
        data: trends.map(t => t.stats.averagePointsAllowed),
        borderColor: team2Color,
        backgroundColor: `${team2Color}20`,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Win Percentage Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Win Percentage Trend</h3>
        </div>
        <div className="h-64">
          <Line options={chartOptions} data={winPercentageData} />
        </div>
      </motion.div>

      {/* Scoring Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold">Scoring Trends</h3>
        </div>
        <div className="h-64">
          <Line options={chartOptions} data={scoringData} />
        </div>
      </motion.div>

      {/* Period Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend, index) => (
          <motion.div
            key={trend.period}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h4 className="text-lg font-semibold mb-4">{trend.period}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600">Record</div>
                <div className="font-bold text-xl">
                  {trend.stats.wins}-{trend.stats.losses}-{trend.stats.ties}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Win %</div>
                <div className="font-bold text-xl">
                  {trend.stats.winPercentage.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Avg Points</div>
                <div className="font-bold text-xl">
                  {trend.stats.averagePointsScored.toFixed(1)}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Playoff Games</div>
                <div className="font-bold text-xl">
                  {trend.stats.playoffGames}
                </div>
              </div>
            </div>
            {trend.stats.championships > 0 && (
              <div className="mt-4 flex items-center gap-2 text-yellow-600">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">
                  {trend.stats.championships} Championship{trend.stats.championships !== 1 ? 's' : ''}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
