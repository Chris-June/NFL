import { Team } from '../types';

export const teamDataLoader = {
  /**
   * Dynamically imports team data based on conference and team name
   * @param conference 'AFC' | 'NFC'
   * @param division 'North' | 'South' | 'East' | 'West'
   * @param teamId Team identifier (e.g., 'ravens', 'patriots')
   */
  loadTeamData: async (conference: string, division: string, teamId: string): Promise<Team> => {
    try {
      const module = await import(`../data/Conference/${conference}/${division}/${teamId}/index`);
      return module.default;
    } catch (error) {
      console.error(`Error loading team data for ${teamId}:`, error);
      throw new Error(`Failed to load team data for ${teamId}`);
    }
  },

  /**
   * Preloads team data for a specific division
   * @param conference 'AFC' | 'NFC'
   * @param division 'North' | 'South' | 'East' | 'West'
   */
  preloadDivision: async (conference: string, division: string): Promise<Team[]> => {
    const teams = [];
    const divisionTeams = getDivisionTeams(conference, division);

    for (const teamId of divisionTeams) {
      try {
        const teamData = await teamDataLoader.loadTeamData(conference, division, teamId);
        teams.push(teamData);
      } catch (error) {
        console.error(`Error preloading data for ${teamId}:`, error);
      }
    }

    return teams;
  }
};

// Helper function to get team IDs for a division
function getDivisionTeams(conference: string, division: string): string[] {
  const divisions = {
    AFC: {
      North: ['ravens', 'bengals', 'browns', 'steelers'],
      South: ['colts', 'texans', 'jaguars', 'titans'],
      East: ['bills', 'dolphins', 'patriots', 'jets'],
      West: ['broncos', 'chiefs', 'raiders', 'chargers']
    },
    NFC: {
      North: ['bears', 'lions', 'packers', 'vikings'],
      South: ['falcons', 'panthers', 'saints', 'buccaneers'],
      East: ['cowboys', 'giants', 'eagles', 'commanders'],
      West: ['cardinals', '49ers', 'rams', 'seahawks']
    }
  };

  return divisions[conference]?.[division] || [];
}
