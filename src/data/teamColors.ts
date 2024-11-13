export interface TeamColors {
  primary: string;
  secondary: string;
  accent?: string;
}

export interface TeamTheme {
  colors: TeamColors;
  mascot: string;
  mascotName: string;
}

export const teamThemes: Record<string, TeamTheme> = {
  cowboys: {
    colors: {
      primary: '#003594',
      secondary: '#869397',
      accent: '#ffffff'
    },
    mascot: 'Cowboy',
    mascotName: 'Rowdy'
  },
  // Add other teams here
};

export const getTeamTheme = (teamId: string): TeamTheme => {
  return teamThemes[teamId] || teamThemes.cowboys; // Default to Cowboys if team not found
};