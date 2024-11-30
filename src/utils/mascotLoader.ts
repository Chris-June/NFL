import { MascotPersonality } from '../types/mascot';

// Conference/Division structure
const conferences = ['AFC', 'NFC'];
const divisions = ['East', 'West', 'North', 'South'];

export async function loadMascot(teamCode: string): Promise<MascotPersonality | null> {
  try {
    // Search through the conference/division structure
    for (const conference of conferences) {
      for (const division of divisions) {
        try {
          const mascot = await import(`../data/Conference/${conference}/${division}/${teamCode}/mascots.ts`);
          return mascot.default || mascot;
        } catch (e) {
          // Continue searching if not found in this path
          continue;
        }
      }
    }
    console.warn(`Mascot not found for team code: ${teamCode}`);
    return null;
  } catch (error) {
    console.error(`Error loading mascot for ${teamCode}:`, error);
    return null;
  }
}

export async function loadMascots(teamCodes: string[]): Promise<Record<string, MascotPersonality>> {
  const mascots: Record<string, MascotPersonality> = {};
  
  await Promise.all(
    teamCodes.map(async (code) => {
      const mascot = await loadMascot(code);
      if (mascot) {
        mascots[code] = mascot;
      }
    })
  );
  
  return mascots;
}
