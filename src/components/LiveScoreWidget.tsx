import React, { useEffect, useState } from 'react';

interface Score {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  quarter: number;
  timeRemaining: string;
  status: 'live' | 'final' | 'scheduled';
}

interface LiveScoreWidgetProps {
  teamId: string;
  apiKey: string;
}

export function LiveScoreWidget({ teamId, apiKey }: LiveScoreWidgetProps) {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        // Replace with your actual NFL API endpoint
        const response = await fetch(`https://api.nfl.com/v1/games/live?team=${teamId}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch live scores');
        }

        const data = await response.json();
        setScores(data.games);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Fetch initially
    fetchScores();

    // Set up polling every 30 seconds
    const interval = setInterval(fetchScores, 30000);

    return () => clearInterval(interval);
  }, [teamId, apiKey]);

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-100 rounded-lg p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        <p>Unable to load live scores</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Live Scores</h3>
      <div className="space-y-4">
        {scores.length === 0 ? (
          <p className="text-gray-500">No live games at the moment</p>
        ) : (
          scores.map((score, index) => (
            <div
              key={index}
              className="border rounded p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="font-medium">{score.homeTeam}</p>
                  <p className="font-medium">{score.awayTeam}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">{score.homeScore}</p>
                  <p className="text-xl font-bold">{score.awayScore}</p>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {score.status === 'live' ? (
                  <p>Q{score.quarter} - {score.timeRemaining}</p>
                ) : score.status === 'final' ? (
                  <p>Final</p>
                ) : (
                  <p>Scheduled</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
