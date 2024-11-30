import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Map of related teams (teams in the same division)
const relatedTeams: Record<string, string[]> = {
  // AFC North
  'ravens': ['bengals', 'browns', 'steelers'],
  'bengals': ['ravens', 'browns', 'steelers'],
  'browns': ['ravens', 'bengals', 'steelers'],
  'steelers': ['ravens', 'bengals', 'browns'],
  
  // AFC South
  'colts': ['texans', 'jaguars', 'titans'],
  'texans': ['colts', 'jaguars', 'titans'],
  'jaguars': ['colts', 'texans', 'titans'],
  'titans': ['colts', 'texans', 'jaguars'],
  
  // AFC East
  'bills': ['dolphins', 'patriots', 'jets'],
  'dolphins': ['bills', 'patriots', 'jets'],
  'patriots': ['bills', 'dolphins', 'jets'],
  'jets': ['bills', 'dolphins', 'patriots'],
  
  // AFC West
  'broncos': ['chiefs', 'raiders', 'chargers'],
  'chiefs': ['broncos', 'raiders', 'chargers'],
  'raiders': ['broncos', 'chiefs', 'chargers'],
  'chargers': ['broncos', 'chiefs', 'raiders'],
  
  // NFC North
  'bears': ['lions', 'packers', 'vikings'],
  'lions': ['bears', 'packers', 'vikings'],
  'packers': ['bears', 'lions', 'vikings'],
  'vikings': ['bears', 'lions', 'packers'],
  
  // NFC South
  'buccaneers': ['falcons', 'panthers', 'saints'],
  'falcons': ['buccaneers', 'panthers', 'saints'],
  'panthers': ['buccaneers', 'falcons', 'saints'],
  'saints': ['buccaneers', 'falcons', 'panthers'],
  
  // NFC East
  'cowboys': ['eagles', 'giants', 'commanders'],
  'eagles': ['cowboys', 'giants', 'commanders'],
  'giants': ['cowboys', 'eagles', 'commanders'],
  'commanders': ['cowboys', 'eagles', 'giants'],
  
  // NFC West
  'cardinals': ['49ers', 'rams', 'seahawks'],
  '49ers': ['cardinals', 'rams', 'seahawks'],
  'rams': ['cardinals', '49ers', 'seahawks'],
  'seahawks': ['cardinals', '49ers', 'rams'],
};

export function usePrefetchTeams() {
  const { pathname } = useLocation();
  const currentTeam = pathname.slice(1); // Remove leading slash

  useEffect(() => {
    if (currentTeam && relatedTeams[currentTeam]) {
      // Prefetch related team pages
      relatedTeams[currentTeam].forEach(async (team) => {
        try {
          // Dynamic import to prefetch
          const module = await import(`../pages/${team.charAt(0).toUpperCase() + team.slice(1)}Page.tsx`);
          // The import itself triggers the prefetch
        } catch (error) {
          console.debug(`Prefetch failed for ${team}:`, error);
        }
      });
    }
  }, [currentTeam]);
}
