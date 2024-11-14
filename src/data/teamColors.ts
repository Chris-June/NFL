export interface TeamColors {
	primary: string;
	secondary: string;
	accent?: string;
}

export interface TeamTheme {
	colors: TeamColors;
	mascot: string;
	mascotName: string;
}

export const teamThemes: Record<string, TeamTheme> = {
	cowboys: {
		colors: {
			primary: "#003594",
			secondary: "#869397",
			accent: "#ffffff",
		},
		mascot: "Cowboy",
		mascotName: "Rowdy",
	},
	eagles: {
		colors: {
			primary: "#004c54",
			secondary: "#a5acaf",
			accent: "#ffffff",
		},
		mascot: "Eagle",
		mascotName: "Swoop",
	},
	giants: {
		colors: {
			primary: "#0b2265",
			secondary: "#a71930",
			accent: "#ffffff",
		},
		mascot: "Giant",
		mascotName: "None",
	},
	washington: {
		colors: {
			primary: "#773141",
			secondary: "#ffb612",
			accent: "#ffffff",
		},
		mascot: "Commander",
		mascotName: "Major Tuddy",
	},
	packers: {
		colors: {
			primary: "#203731",
			secondary: "#ffb612",
			accent: "#ffffff",
		},
		mascot: "Packer",
		mascotName: "None",
	},
	bears: {
		colors: {
			primary: "#0b162a",
			secondary: "#c83803",
			accent: "#ffffff",
		},
		mascot: "Bear",
		mascotName: "Staley",
	},
	vikings: {
		colors: {
			primary: "#4f2683",
			secondary: "#ffc62f",
			accent: "#ffffff",
		},
		mascot: "Viking",
		mascotName: "Viktor",
	},
	lions: {
		colors: {
			primary: "#0076b6",
			secondary: "#b0b7bc",
			accent: "#ffffff",
		},
		mascot: "Lion",
		mascotName: "Roary",
	},
	"49ers": {
		colors: {
			primary: "#aa0000",
			secondary: "#b3995d",
			accent: "#ffffff",
		},
		mascot: "49er",
		mascotName: "Sourdough Sam",
	},
	rams: {
		colors: {
			primary: "#003594",
			secondary: "#ffd100",
			accent: "#ffffff",
		},
		mascot: "Ram",
		mascotName: "Rampage",
	},
	seahawks: {
		colors: {
			primary: "#002244",
			secondary: "#69be28",
			accent: "#a5acaf",
		},
		mascot: "Hawk",
		mascotName: "Blitz",
	},
	cardinals: {
		colors: {
			primary: "#97233f",
			secondary: "#000000",
			accent: "#ffffff",
		},
		mascot: "Cardinal",
		mascotName: "Big Red",
	},
	buccaneers: {
		colors: {
			primary: "#d50a0a",
			secondary: "#34302b",
			accent: "#ffffff",
		},
		mascot: "Pirate",
		mascotName: "Captain Fear",
	},
	saints: {
		colors: {
			primary: "#d3bc8d",
			secondary: "#101820",
			accent: "#ffffff",
		},
		mascot: "Saint",
		mascotName: "Gumbo",
	},
	falcons: {
		colors: {
			primary: "#a71930",
			secondary: "#000000",
			accent: "#ffffff",
		},
		mascot: "Falcon",
		mascotName: "Freddie Falcon",
	},
};

export const getTeamTheme = (teamId: string): TeamTheme => {
	return teamThemes[teamId] || teamThemes.cowboys; // Default to Cowboys if team not found
};
