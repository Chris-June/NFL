import { Team, Player, SuperBowlGame, ConferenceChampionship } from '../types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class DataValidator {
  static validateTeam(team: Team): ValidationResult {
    const errors: string[] = [];

    // Validate required fields
    if (!team.id) errors.push('Team ID is required');
    if (!team.name) errors.push('Team name is required');
    if (!team.colors?.primary) errors.push('Primary color is required');
    if (!team.colors?.secondary) errors.push('Secondary color is required');

    // Validate stats
    if (team.stats) {
      if (typeof team.stats.wins !== 'number') errors.push('Wins must be a number');
      if (typeof team.stats.losses !== 'number') errors.push('Losses must be a number');
      if (typeof team.stats.ties !== 'number') errors.push('Ties must be a number');
      if (typeof team.stats.pointsFor !== 'number') errors.push('Points For must be a number');
      if (typeof team.stats.pointsAgainst !== 'number') errors.push('Points Against must be a number');
      if (typeof team.stats.divisionRank !== 'number') errors.push('Division Rank must be a number');
    } else {
      errors.push('Team stats are required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validatePlayer(player: Player): ValidationResult {
    const errors: string[] = [];

    if (!player.id) errors.push('Player ID is required');
    if (!player.name) errors.push('Player name is required');
    if (!player.position) errors.push('Player position is required');
    if (!player.number) errors.push('Player number is required');
    if (typeof player.active !== 'boolean') errors.push('Player active status must be a boolean');

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateSuperBowl(game: SuperBowlGame): ValidationResult {
    const errors: string[] = [];

    if (!game.year) errors.push('Super Bowl year is required');
    if (!game.winner) errors.push('Winner is required');
    if (!game.loser) errors.push('Loser is required');
    if (!game.score) errors.push('Score is required');
    if (!game.mvp) errors.push('MVP is required');
    if (!game.location) errors.push('Location is required');

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateConferenceChampionship(championship: ConferenceChampionship): ValidationResult {
    const errors: string[] = [];

    if (!championship.year) errors.push('Championship year is required');
    if (!championship.winner) errors.push('Winner is required');
    if (!championship.loser) errors.push('Loser is required');
    if (!championship.score) errors.push('Score is required');
    if (!championship.conference) errors.push('Conference is required');

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateTeamDataConsistency(team: Team): ValidationResult {
    const errors: string[] = [];

    // Validate roster consistency
    if (team.currentRoster) {
      team.currentRoster.forEach((player, index) => {
        const playerValidation = this.validatePlayer(player);
        if (!playerValidation.isValid) {
          errors.push(`Player at index ${index}: ${playerValidation.errors.join(', ')}`);
        }
      });
    }

    // Validate achievements consistency
    if (team.achievements) {
      if (team.achievements.superBowls) {
        team.achievements.superBowls.forEach((game, index) => {
          const gameValidation = this.validateSuperBowl(game);
          if (!gameValidation.isValid) {
            errors.push(`Super Bowl at index ${index}: ${gameValidation.errors.join(', ')}`);
          }
        });
      }

      if (team.achievements.conferenceChampionships) {
        team.achievements.conferenceChampionships.forEach((championship, index) => {
          const championshipValidation = this.validateConferenceChampionship(championship);
          if (!championshipValidation.isValid) {
            errors.push(`Conference Championship at index ${index}: ${championshipValidation.errors.join(', ')}`);
          }
        });
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
