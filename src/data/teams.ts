import { TeamInfo } from '../types';
import { nflTeams } from './nflTeams';

// Flatten the nested structure into a single array of teams
export const teamData: TeamInfo[] = Object.values(nflTeams).flatMap(divisions => 
  Object.values(divisions).flat()
);