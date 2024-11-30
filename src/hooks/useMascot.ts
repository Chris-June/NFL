import { useState, useCallback, useEffect } from 'react';
import { MascotPersonality, MascotMessage, MascotInteraction } from '../types/mascot';
import { loadMascot } from '../utils/mascotLoader';

interface UseMascotProps {
  team1Code: string;
  team2Code: string;
  gameContext?: {
    gameState: string;
    score: {
      home: number;
      away: number;
    };
    currentQuarter: number;
    timeRemaining: string;
  };
}

export const useMascot = ({ team1Code, team2Code, gameContext }: UseMascotProps) => {
  const [team1Mascot, setTeam1Mascot] = useState<MascotPersonality | null>(null);
  const [team2Mascot, setTeam2Mascot] = useState<MascotPersonality | null>(null);
  const [interactions, setInteractions] = useState<MascotInteraction[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load mascots when team codes change
  useEffect(() => {
    const loadMascots = async () => {
      setIsLoading(true);
      try {
        const [mascot1, mascot2] = await Promise.all([
          loadMascot(team1Code),
          loadMascot(team2Code)
        ]);
        
        setTeam1Mascot(mascot1);
        setTeam2Mascot(mascot2);
      } catch (error) {
        console.error('Error loading mascots:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMascots();
  }, [team1Code, team2Code]);

  const generateMascotResponse = useCallback(async (
    mascot: MascotPersonality,
    context: string,
    emotion: MascotMessage['emotion'] = 'neutral'
  ): Promise<MascotMessage> => {
    // In a real implementation, this would call your AI service
    // For now, we'll return a mock response based on the mascot's personality
    const getRandomResponse = (responses: string[]) => {
      return responses[Math.floor(Math.random() * responses.length)];
    };

    let content = '';
    switch (context) {
      case 'greeting':
        content = getRandomResponse(mascot.interactions.greetings);
        break;
      case 'celebration':
        content = getRandomResponse(mascot.interactions.celebrations);
        break;
      case 'encouragement':
        content = getRandomResponse(mascot.interactions.encouragements);
        break;
      case 'touchdown':
        content = getRandomResponse(mascot.interactions.reactions.touchdown);
        break;
      default:
        content = getRandomResponse(mascot.personality.catchphrases);
    }

    return {
      content,
      type: context as any,
      emotion,
      timestamp: Date.now()
    };
  }, []);

  const generateBanter = useCallback(async () => {
    if (!team1Mascot || !team2Mascot) return;

    setIsTyping(true);
    try {
      const mascot1Response = await generateMascotResponse(
        team1Mascot,
        'banter',
        'determined'
      );
      const mascot2Response = await generateMascotResponse(
        team2Mascot,
        'banter',
        'determined'
      );

      const newInteraction: MascotInteraction = {
        mascot1: mascot1Response,
        mascot2: mascot2Response,
        type: 'banter',
        timestamp: Date.now()
      };

      setInteractions(prev => [...prev, newInteraction]);
    } catch (error) {
      console.error('Error generating banter:', error);
    } finally {
      setIsTyping(false);
    }
  }, [team1Mascot, team2Mascot, generateMascotResponse]);

  const generateGameAnalysis = useCallback(async () => {
    if (!team1Mascot || !team2Mascot || !gameContext) return;

    setIsTyping(true);
    try {
      const mascot1Response = await generateMascotResponse(
        team1Mascot,
        'analysis',
        gameContext.score.home > gameContext.score.away ? 'excited' : 'concerned'
      );

      const mascot2Response = await generateMascotResponse(
        team2Mascot,
        'analysis',
        gameContext.score.away > gameContext.score.home ? 'excited' : 'concerned'
      );

      const newInteraction: MascotInteraction = {
        mascot1: mascot1Response,
        mascot2: mascot2Response,
        type: 'analysis',
        timestamp: Date.now()
      };

      setInteractions(prev => [...prev, newInteraction]);
    } catch (error) {
      console.error('Error generating analysis:', error);
    } finally {
      setIsTyping(false);
    }
  }, [team1Mascot, team2Mascot, gameContext, generateMascotResponse]);

  const generatePrediction = useCallback(async () => {
    if (!team1Mascot || !team2Mascot) return;

    setIsTyping(true);
    try {
      const mascot1Response = await generateMascotResponse(
        team1Mascot,
        'prediction',
        'determined'
      );
      const mascot2Response = await generateMascotResponse(
        team2Mascot,
        'prediction',
        'determined'
      );

      const newInteraction: MascotInteraction = {
        mascot1: mascot1Response,
        mascot2: mascot2Response,
        type: 'prediction',
        timestamp: Date.now()
      };

      setInteractions(prev => [...prev, newInteraction]);
    } catch (error) {
      console.error('Error generating prediction:', error);
    } finally {
      setIsTyping(false);
    }
  }, [team1Mascot, team2Mascot, generateMascotResponse]);

  const generateHistoricalContext = useCallback(async () => {
    if (!team1Mascot || !team2Mascot) return;

    setIsTyping(true);
    try {
      const mascot1Response = await generateMascotResponse(
        team1Mascot,
        'history',
        'neutral'
      );
      const mascot2Response = await generateMascotResponse(
        team2Mascot,
        'history',
        'neutral'
      );

      const newInteraction: MascotInteraction = {
        mascot1: mascot1Response,
        mascot2: mascot2Response,
        type: 'history',
        timestamp: Date.now()
      };

      setInteractions(prev => [...prev, newInteraction]);
    } catch (error) {
      console.error('Error generating historical context:', error);
    } finally {
      setIsTyping(false);
    }
  }, [team1Mascot, team2Mascot, generateMascotResponse]);

  const clearInteractions = useCallback(() => {
    setInteractions([]);
  }, []);

  // Auto-generate initial greeting when mascots are loaded
  useEffect(() => {
    if (team1Mascot && team2Mascot && !isLoading && interactions.length === 0) {
      const generateInitialGreeting = async () => {
        setIsTyping(true);
        try {
          const mascot1Response = await generateMascotResponse(
            team1Mascot,
            'greeting',
            'happy'
          );
          const mascot2Response = await generateMascotResponse(
            team2Mascot,
            'greeting',
            'happy'
          );

          const newInteraction: MascotInteraction = {
            mascot1: mascot1Response,
            mascot2: mascot2Response,
            type: 'banter',
            timestamp: Date.now()
          };

          setInteractions([newInteraction]);
        } catch (error) {
          console.error('Error generating initial greeting:', error);
        } finally {
          setIsTyping(false);
        }
      };

      generateInitialGreeting();
    }
  }, [team1Mascot, team2Mascot, isLoading, interactions.length, generateMascotResponse]);

  return {
    team1Mascot,
    team2Mascot,
    interactions,
    isTyping,
    isLoading,
    generateBanter,
    generateGameAnalysis,
    generatePrediction,
    generateHistoricalContext,
    clearInteractions
  };
};
