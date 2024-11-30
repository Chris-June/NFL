export interface Player {
  number: string;
  name: string;
  position: string;
  height: string;
  weight: string;
  age: number;
  experience: string;
  college: string;
}

export const currentRoster: Player[] = [
  {
    number: "10",
    name: "Jimmy Garoppolo",
    position: "QB",
    height: "6-2",
    weight: "225",
    age: 31,
    experience: "10th season",
    college: "Eastern Illinois"
  },
  {
    number: "13",
    name: "Brock Purdy",
    position: "QB",
    height: "6-1",
    weight: "220",
    age: 23,
    experience: "2nd season",
    college: "Iowa State"
  },
  {
    number: "23",
    name: "Christian McCaffrey",
    position: "RB",
    height: "5-11",
    weight: "205",
    age: 27,
    experience: "7th season",
    college: "Stanford"
  },
  {
    number: "19",
    name: "Deebo Samuel",
    position: "WR",
    height: "6-0",
    weight: "215",
    age: 27,
    experience: "5th season",
    college: "South Carolina"
  },
  {
    number: "11",
    name: "Brandon Aiyuk",
    position: "WR",
    height: "6-0",
    weight: "200",
    age: 25,
    experience: "4th season",
    college: "Arizona State"
  },
  {
    number: "85",
    name: "George Kittle",
    position: "TE",
    height: "6-4",
    weight: "250",
    age: 29,
    experience: "7th season",
    college: "Iowa"
  },
  {
    number: "71",
    name: "Trent Williams",
    position: "OT",
    height: "6-5",
    weight: "320",
    age: 35,
    experience: "14th season",
    college: "Oklahoma"
  },
  {
    number: "97",
    name: "Nick Bosa",
    position: "DE",
    height: "6-4",
    weight: "266",
    age: 25,
    experience: "5th season",
    college: "Ohio State"
  },
  {
    number: "54",
    name: "Fred Warner",
    position: "LB",
    height: "6-3",
    weight: "230",
    age: 26,
    experience: "6th season",
    college: "BYU"
  },
  {
    number: "20",
    name: "Charvarius Ward",
    position: "CB",
    height: "6-1",
    weight: "196",
    age: 27,
    experience: "6th season",
    college: "Middle Tennessee State"
  },
  {
    number: "31",
    name: "Tashaun Gipson Sr.",
    position: "S",
    height: "6-1",
    weight: "212",
    age: 33,
    experience: "12th season",
    college: "Wyoming"
  },
  {
    number: "9",
    name: "Robbie Gould",
    position: "K",
    height: "6-0",
    weight: "190",
    age: 40,
    experience: "19th season",
    college: "Penn State"
  }
];
