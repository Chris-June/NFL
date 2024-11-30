import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { LiveScoreWidget } from '../LiveScoreWidget';

const mockScores = {
  games: [
    {
      homeTeam: 'Seahawks',
      awayTeam: 'Rams',
      homeScore: 24,
      awayScore: 17,
      quarter: 4,
      timeRemaining: '2:30',
      status: 'live' as const,
    },
  ],
};

describe('LiveScoreWidget', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockReset();
  });

  it('renders loading state initially', () => {
    render(<LiveScoreWidget teamId="seahawks" apiKey="test-key" />);
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  it('renders live scores when data is loaded', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockScores,
    });

    render(<LiveScoreWidget teamId="seahawks" apiKey="test-key" />);

    await waitFor(() => {
      expect(screen.getByText('Seahawks')).toBeInTheDocument();
      expect(screen.getByText('24')).toBeInTheDocument();
      expect(screen.getByText('Rams')).toBeInTheDocument();
      expect(screen.getByText('17')).toBeInTheDocument();
      expect(screen.getByText('Q4 - 2:30')).toBeInTheDocument();
    });
  });

  it('renders error state when API call fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<LiveScoreWidget teamId="seahawks" apiKey="test-key" />);

    await waitFor(() => {
      expect(screen.getByText('Unable to load live scores')).toBeInTheDocument();
    });
  });

  it('shows "No live games" message when no games are available', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ games: [] }),
    });

    render(<LiveScoreWidget teamId="seahawks" apiKey="test-key" />);

    await waitFor(() => {
      expect(screen.getByText('No live games at the moment')).toBeInTheDocument();
    });
  });

  it('makes API call with correct parameters', async () => {
    render(<LiveScoreWidget teamId="seahawks" apiKey="test-key" />);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.nfl.com/v1/games/live?team=seahawks',
      expect.objectContaining({
        headers: {
          'Authorization': 'Bearer test-key',
          'Content-Type': 'application/json',
        },
      })
    );
  });
});
