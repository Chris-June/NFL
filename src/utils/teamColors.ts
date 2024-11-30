export interface TeamColors {
  primary: string;
  secondary: string;
  accent?: string;
}

export const teamColors: Record<string, TeamColors> = {
  // AFC North
  ravens: { primary: '#241773', secondary: '#000000', accent: '#9E7C0C' },
  bengals: { primary: '#FB4F14', secondary: '#000000' },
  browns: { primary: '#FF3C00', secondary: '#311D00' },
  steelers: { primary: '#FFB612', secondary: '#101820' },

  // AFC South
  colts: { primary: '#002C5F', secondary: '#A2AAAD' },
  texans: { primary: '#03202F', secondary: '#A71930' },
  jaguars: { primary: '#101820', secondary: '#D7A22A', accent: '#006778' },
  titans: { primary: '#0C2340', secondary: '#4B92DB', accent: '#C8102E' },

  // AFC East
  bills: { primary: '#00338D', secondary: '#C60C30' },
  dolphins: { primary: '#008E97', secondary: '#FC4C02', accent: '#005778' },
  patriots: { primary: '#002244', secondary: '#C60C30', accent: '#B0B7BC' },
  jets: { primary: '#125740', secondary: '#000000', accent: '#FFFFFF' },

  // AFC West
  broncos: { primary: '#FB4F14', secondary: '#002244' },
  chiefs: { primary: '#E31837', secondary: '#FFB81C' },
  raiders: { primary: '#000000', secondary: '#A5ACAF' },
  chargers: { primary: '#0080C6', secondary: '#FFC20E', accent: '#FFFFFF' },

  // NFC North
  bears: { primary: '#0B162A', secondary: '#C83803' },
  lions: { primary: '#0076B6', secondary: '#B0B7BC', accent: '#000000' },
  packers: { primary: '#203731', secondary: '#FFB612' },
  vikings: { primary: '#4F2683', secondary: '#FFC62F' },

  // NFC South
  buccaneers: { primary: '#D50A0A', secondary: '#34302B', accent: '#B1BABF' },
  falcons: { primary: '#A71930', secondary: '#000000', accent: '#A5ACAF' },
  panthers: { primary: '#0085CA', secondary: '#101820', accent: '#BFC0BF' },
  saints: { primary: '#101820', secondary: '#D3BC8D', accent: '#FFFFFF' },

  // NFC East
  cowboys: { primary: '#003594', secondary: '#041E42', accent: '#869397' },
  eagles: { primary: '#004C54', secondary: '#A5ACAF', accent: '#ACC0C6' },
  giants: { primary: '#0B2265', secondary: '#A71930', accent: '#A5ACAF' },
  commanders: { primary: '#5A1414', secondary: '#FFB612', accent: '#FFFFFF' },

  // NFC West
  cardinals: { primary: '#97233F', secondary: '#000000', accent: '#FFB612' },
  '49ers': { primary: '#AA0000', secondary: '#B3995D' },
  rams: { primary: '#003594', secondary: '#FFA300', accent: '#FFD100' },
  seahawks: { primary: '#002244', secondary: '#69BE28', accent: '#A5ACAF' },
};

import { TeamTheme } from '../types/theme';

export const getTeamTheme = (teamName: string): TeamTheme => {
  const themes: Record<string, TeamTheme> = {
    Bills: {
      primary: '#00338D',
      secondary: '#C60C30'
    },
    Dolphins: {
      primary: '#008E97',
      secondary: '#FC4C02'
    },
    Patriots: {
      primary: '#002244',
      secondary: '#C60C30'
    },
    Jets: {
      primary: '#125740',
      secondary: '#FFFFFF'
    },
    Cowboys: {
      primary: '#041E42',
      secondary: '#869397'
    }
    // Add other teams as needed
  };

  return themes[teamName] || { primary: '#000000', secondary: '#FFFFFF' };
};

export function getTeamColors(pathname: string): TeamColors {
  // Remove leading slash and handle special cases
  const team = pathname.slice(1).toLowerCase();
  return teamColors[team] || { primary: '#000000', secondary: '#ffffff' };
}

export function generateTeamGradient(colors: TeamColors): string {
  if (colors.accent) {
    return `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`;
  }
  return `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
}
