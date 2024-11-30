import { DataValidator } from './dataValidation';
import fs from 'fs';
import path from 'path';

interface ValidationSummary {
  team: string;
  isValid: boolean;
  errors: string[];
}

async function validateAllTeams(): Promise<ValidationSummary[]> {
  const results: ValidationSummary[] = [];
  const conferences = ['AFC', 'NFC'];
  const divisions = ['North', 'South', 'East', 'West'];
  const baseDir = path.join(__dirname, '../data/Conference');

  for (const conference of conferences) {
    for (const division of divisions) {
      const divisionPath = path.join(baseDir, conference, division);
      const teams = fs.readdirSync(divisionPath);

      for (const team of teams) {
        try {
          const teamData = require(path.join(divisionPath, team, 'index.ts')).default;
          const validation = DataValidator.validateTeamDataConsistency(teamData);
          
          results.push({
            team: teamData.name,
            isValid: validation.isValid,
            errors: validation.errors
          });
        } catch (error) {
          results.push({
            team: team,
            isValid: false,
            errors: [`Failed to load team data: ${error.message}`]
          });
        }
      }
    }
  }

  return results;
}

// Execute validation and generate report
validateAllTeams().then(results => {
  const invalidTeams = results.filter(r => !r.isValid);
  const validTeams = results.filter(r => r.isValid);

  console.log('\n=== NFL Teams Data Validation Report ===\n');
  console.log(`Total Teams Validated: ${results.length}`);
  console.log(`Valid Teams: ${validTeams.length}`);
  console.log(`Invalid Teams: ${invalidTeams.length}\n`);

  if (invalidTeams.length > 0) {
    console.log('=== Validation Errors ===\n');
    invalidTeams.forEach(team => {
      console.log(`${team.team}:`);
      team.errors.forEach(error => console.log(`  - ${error}`));
      console.log('');
    });
  }

  if (validTeams.length === results.length) {
    console.log('✅ All teams passed validation!\n');
  }
});
