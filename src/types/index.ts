// Add to existing types
export interface PlayerBackground {
  birthDate: string;
  birthPlace: string;
  age: number;
  height: string;
  weight: number;
  highSchool: string;
  highSchoolLocation: string;
  college: string;
  collegeYears: string;
}

export interface PlayerDraft {
  year: number;
  round: number;
  overall: number;
}

export interface CollegeStats {
  stats: Array<{
    label: string;
    value: string;
  }>;
  awards: string[];
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  imageUrl: string;
  stats: Record<string, string>;
  careerStats?: {
    years: string;
    achievements: string[];
    stats: Record<string, string>;
  };
  background?: PlayerBackground;
  draft?: PlayerDraft;
  collegeStats?: CollegeStats;
}