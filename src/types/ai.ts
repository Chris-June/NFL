export interface GamePrediction {
  confidence: number;
  predictedWinner: string;
  keyFactors: string[];
  matchupAnalysis: {
    offense: {
      strengths: string[];
      weaknesses: string[];
      keyPlayers: string[];
    };
    defense: {
      strengths: string[];
      weaknesses: string[];
      keyPlayers: string[];
    };
    specialTeams: {
      impact: string;
      keyPlayers: string[];
    };
  };
}

export interface PlayPrediction {
  situation: {
    down: number;
    distance: number;
    fieldPosition: string;
    timeRemaining: string;
    score: {
      home: number;
      away: number;
    };
  };
  predictedPlay: {
    type: 'run' | 'pass' | 'special';
    probability: number;
    likelyFormation: string;
    keyMatchups: string[];
  };
}

export interface GameInsights {
  momentum: {
    currentTeam: string;
    factors: string[];
    intensity: number;
  };
  keyTrends: {
    offensive: string[];
    defensive: string[];
    scoring: string[];
  };
  adjustments: {
    recommended: string[];
    reasoning: string[];
  };
}

export interface FanEngagement {
  sentiment: {
    overall: number;
    trending: 'up' | 'down' | 'stable';
    topEmotions: string[];
  };
  crowdEnergy: {
    level: number;
    triggers: string[];
    recommendations: string[];
  };
  socialBuzz: {
    trending: string[];
    highlights: string[];
    fanReactions: string[];
  };
}

export interface PlayerAnalysis {
  performance: {
    current: {
      rating: number;
      strengths: string[];
      areas_to_improve: string[];
    };
    historical: {
      trend: string;
      notable_games: Array<{
        date: string;
        opponent: string;
        highlights: string[];
      }>;
    };
    matchup: {
      advantage: number;
      key_factors: string[];
      strategy_tips: string[];
    };
  };
  biometrics: {
    fatigue: number;
    intensity: number;
    risk_areas: string[];
  };
}

export interface TacticalAnalysis {
  formation: {
    effectiveness: number;
    counters: string[];
    opportunities: string[];
  };
  personnel: {
    matchups: Array<{
      position: string;
      advantage: string;
      explanation: string;
    }>;
    substitutions: Array<{
      position: string;
      recommendation: string;
      reasoning: string;
    }>;
  };
  situational: {
    redZone: {
      success_rate: number;
      recommended_plays: string[];
    };
    thirdDown: {
      conversion_rate: number;
      patterns: string[];
    };
    twoMinute: {
      efficiency: number;
      key_plays: string[];
    };
  };
}

export interface AIFeatureFlags {
  predictiveAnalytics: boolean;
  realtimeInsights: boolean;
  fanEngagement: boolean;
  tacticalAnalysis: boolean;
  biometricTracking: boolean;
  socialIntegration: boolean;
}
