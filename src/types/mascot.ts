export interface MascotPersonality {
  name: string;
  team: string;
  personality: {
    traits: string[];
    tone: string;
    attitude: string;
    catchphrases: string[];
  };
  background: {
    origin: string;
    history: string;
    significance: string;
  };
  appearance: {
    description: string;
    colors: string[];
    signature_features: string[];
  };
  interactions: {
    greetings: string[];
    celebrations: string[];
    encouragements: string[];
    reactions: {
      touchdown: string[];
      interception: string[];
      fieldGoal: string[];
      victory: string[];
      defeat: string[];
    };
  };
  knowledge: {
    team_history: string[];
    legendary_players: string[];
    memorable_moments: string[];
    rivalries: string[];
    traditions: string[];
  };
  aiPersonaPrompt: string;
}

export interface MascotMessage {
  content: string;
  type: 'greeting' | 'reaction' | 'analysis' | 'celebration' | 'encouragement';
  emotion: 'excited' | 'happy' | 'neutral' | 'concerned' | 'determined';
  timestamp: number;
  context?: {
    gameState?: string;
    score?: {
      home: number;
      away: number;
    };
    playContext?: string;
  };
}

export interface MascotInteraction {
  mascot1: MascotMessage;
  mascot2?: MascotMessage;
  type: 'banter' | 'analysis' | 'prediction' | 'history' | 'rivalry';
  timestamp: number;
}
