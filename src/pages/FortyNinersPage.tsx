import React, { useState } from "react";
import { TeamHero } from "../components/TeamHero";
import { Header } from "../components/Header";
import { StandingsCard } from "../components/StandingsCard";
import { PlayerRoster } from "../components/PlayerRoster";
import { ChatWidget } from "../components/ChatWidget";
import { allTimeStats } from "../data/Conference/NFC/West/FortyNiners/allTimeStats";
import { achievements } from "../data/Conference/NFC/West/FortyNiners/achievements";
import { championships } from "../data/Conference/NFC/West/FortyNiners/championships";
import { conferenceChampionships } from "../data/Conference/NFC/West/FortyNiners/conferenceChampionships";
import { divisionChampionships } from "../data/Conference/NFC/West/FortyNiners/divisionChampionships";
import { hallOfFame } from "../data/Conference/NFC/West/FortyNiners/hallOfFame";
import { retiredNumbers } from "../data/Conference/NFC/West/FortyNiners/retiredNumbers";
import { superBowlDetails } from "../data/Conference/NFC/West/FortyNiners/superBowlDetails";

export const FortyNinersPage: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-gold-500">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TeamHero
          teamName="San Francisco 49ers"
          mascot="Sourdough Sam"
          stadium="Levi's Stadium"
          location="Santa Clara, California"
          established={1946}
          championships={championships}
          conferenceChampionships={conferenceChampionships}
          divisionChampionships={divisionChampionships}
          allTimeStats={allTimeStats}
          achievements={achievements}
          hallOfFame={hallOfFame}
          retiredNumbers={retiredNumbers}
          superBowlDetails={superBowlDetails}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <StandingsCard teamId="SF" />
          <PlayerRoster teamId="SF" />
        </div>

        {showChat && <ChatWidget teamId="SF" />}
        
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          {showChat ? "Close Chat" : "Open Chat"}
        </button>
      </main>
    </div>
  );
};
