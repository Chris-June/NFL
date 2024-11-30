import { Player } from "../types";

export const currentRoster: Player[] = [
	{
		id: "4",
		name: "Dak Prescott",
		number: 4,
		position: "Quarterback",
		imageUrl:
			"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		stats: {
			"Pass Yards": "4,516",
			Touchdowns: "36",
			"Completion %": "69.5",
			"QB Rating": "105.9",
		},
		background: {
			birthDate: "July 29, 1993",
			birthPlace: "Sulphur, Louisiana",
			age: 30,
			height: "6'2\"",
			weight: 238,
			highSchool: "Haughton High School",
			highSchoolLocation: "Haughton, Louisiana",
			college: "Mississippi State",
			collegeYears: "2011-2015",
		},
		draft: {
			year: 2016,
			round: 4,
			overall: 135,
		},
		collegeStats: {
			stats: [
				{ label: "Pass Yards", value: "9,376" },
				{ label: "Touchdowns", value: "70" },
				{ label: "Completion %", value: "62.8" },
				{ label: "Rush Yards", value: "2,521" },
			],
			awards: [
				"First-team All-SEC (2015)",
				"Conerly Trophy (2015)",
				"Senior Bowl MVP (2016)",
			],
		},
	},
	{
		id: "21",
		name: "Ezekiel Elliott",
		number: 21,
		position: "Running Back",
		imageUrl:
			"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		stats: {
			"Rush Yards": "1,273",
			Touchdowns: "12",
			"Yards/Carry": "4.2",
			Receptions: "39",
		},
		background: {
			birthDate: "July 22, 1995",
			birthPlace: "St. Louis, Missouri",
			age: 28,
			height: "6'0\"",
			weight: 225,
			highSchool: "John Burroughs School",
			highSchoolLocation: "St. Louis, Missouri",
			college: "Ohio State",
			collegeYears: "2013-2015",
		},
		draft: {
			year: 2016,
			round: 1,
			overall: 4,
		},
		collegeStats: {
			stats: [
				{ label: "Rush Yards", value: "3,961" },
				{ label: "Touchdowns", value: "43" },
				{ label: "Yards/Carry", value: "6.7" },
				{ label: "All-Purpose Yards", value: "4,410" },
			],
			awards: [
				"CFP National Champion (2014)",
				"Big Ten Champion (2014)",
				"All-American (2015)",
			],
		},
	},
	{
		id: "88",
		name: "CeeDee Lamb",
		number: 88,
		position: "Wide Receiver",
		imageUrl:
			"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		stats: {
			Receptions: "135",
			"Rec Yards": "1,749",
			Touchdowns: "12",
			"Yards/Rec": "13.0",
		},
		background: {
			birthDate: "April 8, 1999",
			birthPlace: "Opelousas, Louisiana",
			age: 24,
			height: "6'2\"",
			weight: 200,
			highSchool: "Foster High School",
			highSchoolLocation: "Richmond, Texas",
			college: "Oklahoma",
			collegeYears: "2017-2019",
		},
		draft: {
			year: 2020,
			round: 1,
			overall: 17,
		},
		collegeStats: {
			stats: [
				{ label: "Receptions", value: "173" },
				{ label: "Rec Yards", value: "3,292" },
				{ label: "Touchdowns", value: "32" },
				{ label: "Yards/Rec", value: "19.0" },
			],
			awards: [
				"First-team All-American (2019)",
				"First-team All-Big 12 (2019)",
				"Biletnikoff Award Finalist (2019)",
			],
		},
	},
	{
		id: "90",
		name: "DeMarcus Lawrence",
		number: 90,
		position: "Defensive End",
		imageUrl:
			"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		stats: {
			Tackles: "65",
			Sacks: "9",
			"Forced Fumbles": "3",
			TFL: "13",
		},
		background: {
			birthDate: "April 28, 1992",
			birthPlace: "Aiken, South Carolina",
			age: 31,
			height: "6'3\"",
			weight: 265,
			highSchool: "Silver Bluff High School",
			highSchoolLocation: "Aiken, South Carolina",
			college: "Boise State",
			collegeYears: "2012-2013",
		},
		draft: {
			year: 2014,
			round: 2,
			overall: 34,
		},
		collegeStats: {
			stats: [
				{ label: "Tackles", value: "120" },
				{ label: "Sacks", value: "20" },
				{ label: "Forced Fumbles", value: "7" },
				{ label: "TFL", value: "34" },
			],
			awards: [
				"First-team All-Mountain West (2013)",
				"Second-team All-Mountain West (2012)",
			],
		},
	},
	{
		id: "7",
		name: "Trey Burton",
		number: 7,
		position: "Safety",
		imageUrl:
			"https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
		stats: {
			Tackles: "108",
			Interceptions: "5",
			"Passes Defended": "14",
			"Forced Fumbles": "2",
		},
		background: {
			birthDate: "January 15, 1998",
			birthPlace: "Green Bay, Texas",
			age: 25,
			height: "6'1\"",
			weight: 200,
			highSchool: "South Oak Cliff",
			highSchoolLocation: "Green Bay, Texas",
			college: "Alabama",
			collegeYears: "2016-2019",
		},
		draft: {
			year: 2020,
			round: 2,
			overall: 51,
		},
		collegeStats: {
			stats: [
				{ label: "Tackles", value: "176" },
				{ label: "Interceptions", value: "13" },
				{ label: "Passes Defended", value: "20" },
				{ label: "Forced Fumbles", value: "4" },
			],
			awards: [
				"CFP National Champion (2017)",
				"First-team All-SEC (2019)",
				"Jim Thorpe Award Finalist (2019)",
			],
		},
	},

	// Options for managing a larger roster (e.g., 52 players):
	//
	// 1. Separate JSON Data File:
	//    - Move the `currentRoster` data to a separate `roster.json` file and import it where needed.
	//    - Example:
	//      import rosterData from './roster.json';
	//      export const currentRoster: Player[] = rosterData;
	//
	// 2. Modularized Player Data:
	//    - Split the data into individual files or groups (e.g., by position).
	//    - Example:
	//      import { quarterbacks } from './quarterbacks';
	//      import { runningbacks } from './runningbacks';
	//      export const currentRoster: Player[] = [...quarterbacks, ...runningbacks];
	//
	// 3. Database or API Integration:
	//    - Store the player information in a database or serve it via an API.
	//    - Example:
	//      useEffect(() => {
	//        fetch('https://api.example.com/roster')
	//          .then((response) => response.json())
	//          .then((data) => setRoster(data));
	//      }, []);
	//
	// 4. Scripted Population from Spreadsheet:
	//    - Use a script to convert player information from a spreadsheet (e.g., CSV) into JSON format.
	//    - Example:
	//      const csv = require('csvtojson');
	//      csv().fromFile('./roster.csv').then((jsonObj) => { console.log(jsonObj); });
	//
	// 5. Lazy Loading or Pagination:
	//    - Lazy load player data or paginate to optimize performance.
	//    - Example:
	//      useEffect(() => {
	//        fetch(`https://api.example.com/roster?page=${page}`)
	//          .then((response) => response.json())
	//          .then((data) => setPlayers((prev) => [...prev, ...data]));
	//      }, [page]);
];
