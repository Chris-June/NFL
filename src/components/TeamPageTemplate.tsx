import React, { useState, useEffect, Suspense, useCallback, useMemo } from "react";
import { useQueryClient } from '@tanstack/react-query';
import { FixedSizeList } from 'react-window';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { TeamHero } from "./TeamHero";
import { Header } from "./Header";
import { StandingsCard } from "./StandingsCard";
import { PlayerRoster } from "./PlayerRoster";
import { HallOfFame } from "./HallOfFame";
import { TeamHistory } from "./TeamHistory";
import { ChatWidget } from "./ChatWidget";
import { SearchBar } from "./SearchBar";
import { PlayerBackgroundModal } from "./PlayerBackgroundModal";
import { SuperBowlModal } from "./SuperBowlModal";
import { ConferenceChampionshipModal } from "./ConferenceChampionshipModal";
import { ErrorBoundary } from "./ErrorBoundary";
import { PageLoader } from "./PageLoader";
import { BackToTop } from "./BackToTop";
import { StatsTicker } from "./StatsTicker";
import { LiveScoreWidget } from "./LiveScoreWidget";
import { FantasyStatsWidget } from "./FantasyStatsWidget";
import { AIAnalyticsDashboard } from "./ai/AIAnalyticsDashboard";
import { RouteTransition } from "./RouteTransition";
import { Footer } from "./Footer";
import { 
  TeamInfo, 
  Player, 
  SuperBowlGame, 
  ConferenceChampionship, 
  TeamStats,
  HistoricalStats,
  CurrentStats,
  TeamMascot
} from "../types";

interface TeamPageTemplateProps {
  teamInfo: TeamInfo;
  currentRoster: Player[];
  allTimeStats: TeamStats;
  historicalStats: HistoricalStats;
  currentStats: CurrentStats;
  superBowlDetails: SuperBowlGame[];
  conferenceChampionships: ConferenceChampionship[];
  mascots: Record<string, TeamMascot>;
}

const TeamPageTemplate: React.FC<TeamPageTemplateProps> = React.memo(({
  teamInfo,
  currentRoster,
  allTimeStats,
  historicalStats,
  currentStats,
  superBowlDetails,
  conferenceChampionships,
  mascots
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedSuperBowl, setSelectedSuperBowl] = useState<SuperBowlGame | null>(null);
  const [selectedChampionship, setSelectedChampionship] = useState<ConferenceChampionship | null>(null);
  const queryClient = useQueryClient();

  // Memoize handlers
  const handlePlayerSelect = useCallback((player: Player | null) => {
    setSelectedPlayer(player);
  }, []);

  const handleGameClick = useCallback((game: SuperBowlGame | ConferenceChampionship) => {
    if ('mvp' in game) {
      setSelectedSuperBowl(game as SuperBowlGame);
    } else {
      setSelectedChampionship(game as ConferenceChampionship);
    }
  }, []);

  // Prefetch data
  useEffect(() => {
    // Prefetch next game data
    queryClient.prefetchQuery({
      queryKey: ['nextGame', teamInfo.id],
      queryFn: () => fetch(`/api/games/next/${teamInfo.id}`).then(res => res.json())
    });

    // Prefetch player details for visible roster
    currentRoster.slice(0, 10).forEach(player => {
      queryClient.prefetchQuery({
        queryKey: ['player', player.id],
        queryFn: () => fetch(`/api/players/${player.id}`).then(res => res.json())
      });
    });
  }, [teamInfo.id, currentRoster, queryClient]);

  // Dark mode effect
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handler);
    return () => darkModeQuery.removeEventListener('change', handler);
  }, []);

  // Memoize computed values
  const containerClassName = useMemo(() => 
    `min-h-screen ${isDarkMode ? 'bg-[#0B1623] text-white' : 'bg-[#F5F7FA] text-[#1A1A1A]'}`, 
    [isDarkMode]
  );

  const cardClassName = useMemo(() => 
    `p-6 rounded-xl shadow-lg backdrop-blur-sm ${
      isDarkMode ? 'bg-[#1E293B]/90 shadow-blue-900/20' : 'bg-white/90 shadow-gray-200/50'
    }`,
    [isDarkMode]
  );

  // Generate structured data for the team
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": teamInfo.name,
    "sport": "American Football",
    "league": {
      "@type": "SportsOrganization",
      "name": "National Football League",
      "url": "https://www.nfl.com"
    },
    "imageUrl": teamInfo.imageUrl,
    "image": teamInfo.imageUrl,
    "description": `Official page of the ${teamInfo.name}, an NFL team based in ${teamInfo.location}`,
    "location": {
      "@type": "Place",
      "name": teamInfo.stadium,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": teamInfo.location
      }
    },
    "member": currentRoster.map(player => ({
      "@type": "Person",
      "name": player.name,
      "jobTitle": player.position
    })),
    "award": [
      ...teamInfo.achievements.superBowls.details.map(bowl => ({
        "@type": "Award",
        "name": `Super Bowl Champion ${bowl.year}`,
        "description": `Won Super Bowl against ${bowl.opponent} with score ${bowl.score}`
      })),
      {
        "@type": "Award",
        "name": "Conference Championships",
        "description": `${teamInfo.achievements.conferenceChampionships.value} times (${teamInfo.achievements.conferenceChampionships.years.join(', ')})`
      },
      {
        "@type": "Award",
        "name": "Division Titles",
        "description": `${teamInfo.achievements.divisionTitles.value} times (${teamInfo.achievements.divisionTitles.years.join(', ')})`
      }
    ]
  }), [teamInfo, currentRoster]);

  return (
    <ErrorBoundary>
      <Helmet>
        {/* Meta Tags */}
        <title>{`${teamInfo.name} - Official NFL Team Page`}</title>
        <meta name="description" content={`Get the latest news, scores, stats, and updates for the ${teamInfo.name}. View roster, schedule, and team history.`} />
        <meta name="keywords" content={`${teamInfo.name}, NFL, football, ${teamInfo.location}, ${currentRoster.map(p => p.name).join(', ')}`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${teamInfo.name} - Official NFL Team Page`} />
        <meta property="og:description" content={`Get the latest news, scores, stats, and updates for the ${teamInfo.name}. View roster, schedule, and team history.`} />
        <meta property="og:image" content={teamInfo.imageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${teamInfo.name} - Official NFL Team Page`} />
        <meta name="twitter:description" content={`Get the latest news, scores, stats, and updates for the ${teamInfo.name}. View roster, schedule, and team history.`} />
        <meta name="twitter:image" content={teamInfo.imageUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <RouteTransition>
        <div 
          className={containerClassName}
          role="main"
          aria-label={`${teamInfo.name} team page`}
        >
          {/* Skip link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
          >
            Skip to main content
          </a>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Gradient overlay for dark mode */}
              <div className={`fixed inset-0 pointer-events-none ${
                isDarkMode ? `bg-gradient-to-br from-[${teamInfo.colors.primary}]/20 to-transparent` : ''
              }`} />

              <Header team={teamInfo} />
              <StatsTicker team={teamInfo} currentStats={currentStats} />

              {/* Main content */}
              <div className="relative mt-16">
                <div className={`absolute inset-0 ${
                  isDarkMode ? `bg-[url("/patterns/${teamInfo.name.toLowerCase().replace(/\s/g, '')}-pattern-dark.png")]` 
                             : `bg-[url("/patterns/${teamInfo.name.toLowerCase().replace(/\s/g, '')}-pattern-light.png")]`
                } opacity-5 pointer-events-none bg-repeat`} />

                <Suspense fallback={<PageLoader teamColors={teamInfo.colors} />}>
                  <main id="main-content" className="relative container mx-auto px-4 py-8">
                    <h1 className="sr-only">{teamInfo.name} Team Page</h1>
                    
                    <section aria-labelledby="team-hero">
                      <h2 id="team-hero" className="sr-only">Team Overview</h2>
                      <TeamHero 
                        team={teamInfo}
                        stats={allTimeStats}
                        mascots={mascots}
                      />
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column */}
                      <div className="lg:col-span-2 space-y-6">
                        <section aria-labelledby="search-section">
                          <h2 id="search-section" className="text-2xl font-bold mb-4">Search Players and Games</h2>
                          <div className={cardClassName}>
                            <SearchBar 
                              onPlayerClick={handlePlayerSelect}
                              onGameClick={handleGameClick}
                              teamColors={teamInfo.colors}
                              aria-label="Search players and games"
                            />
                          </div>
                        </section>

                        <section aria-labelledby="roster-section">
                          <h2 id="roster-section" className="text-2xl font-bold mb-4">Current Roster</h2>
                          <div className={cardClassName}>
                            <FixedSizeList
                              height={600}
                              itemCount={currentRoster.length}
                              itemSize={80}
                              width="100%"
                            >
                              {({ index, style }) => (
                                <PlayerRoster 
                                  roster={[currentRoster[index]]}
                                  onPlayerSelect={handlePlayerSelect}
                                  style={style}
                                />
                              )}
                            </FixedSizeList>
                          </div>
                        </section>

                        <section aria-labelledby="hall-of-fame">
                          <h2 id="hall-of-fame" className="text-2xl font-bold mb-4">Hall of Fame</h2>
                          <div className={cardClassName}>
                            <HallOfFame 
                              team={teamInfo}
                              achievements={teamInfo.achievements}
                              onPlayerSelect={handlePlayerSelect}
                            />
                          </div>
                        </section>

                        <section aria-labelledby="team-history">
                          <h2 id="team-history" className="text-2xl font-bold mb-4">Team History</h2>
                          <div className={cardClassName}>
                            <TeamHistory 
                              team={teamInfo}
                              superBowls={superBowlDetails}
                              conferenceChampionships={conferenceChampionships}
                              historicalStats={historicalStats}
                              onSuperBowlSelect={setSelectedSuperBowl}
                              onConferenceSelect={setSelectedChampionship}
                            />
                          </div>
                        </section>
                      </div>
                      
                      {/* Right Column */}
                      <div className="space-y-6">
                        <section aria-labelledby="standings-section">
                          <h2 id="standings-section" className="text-2xl font-bold mb-4">Team Standings</h2>
                          <div className={cardClassName}>
                            <StandingsCard 
                              currentStats={currentStats}
                              allTimeStats={allTimeStats}
                            />
                          </div>
                        </section>

                        <div className="sticky top-24 space-y-6">
                          <section aria-labelledby="live-scores">
                            <h2 id="live-scores" className="text-2xl font-bold mb-4">Live Scores</h2>
                            <LiveScoreWidget teamId={teamInfo.id} apiKey={process.env.REACT_APP_NFL_API_KEY || ''} />
                          </section>

                          <section aria-labelledby="fantasy-stats">
                            <h2 id="fantasy-stats" className="text-2xl font-bold mb-4">Fantasy Stats</h2>
                            <FantasyStatsWidget teamId={teamInfo.id} apiKey={process.env.REACT_APP_FANTASY_API_KEY || ''} />
                          </section>

                          <section aria-labelledby="ai-analytics">
                            <h2 id="ai-analytics" className="text-2xl font-bold mb-4">AI Analytics</h2>
                            <AIAnalyticsDashboard 
                              teamId={teamInfo.id}
                              currentStats={currentStats}
                              historicalStats={historicalStats}
                            />
                          </section>

                          <section aria-labelledby="chat-section">
                            <h2 id="chat-section" className="text-2xl font-bold mb-4">Team Chat</h2>
                            <ChatWidget teamId={teamInfo.id} />
                          </section>
                        </div>
                      </div>
                    </div>
                  </main>

                  <Footer team={teamInfo} />
                  <BackToTop teamColors={teamInfo.colors} />
                </Suspense>
              </div>

              {/* Modals with proper focus management */}
              <AnimatePresence>
                {selectedPlayer && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <PlayerBackgroundModal
                      player={selectedPlayer}
                      onClose={() => setSelectedPlayer(null)}
                      teamColors={teamInfo.colors}
                      initialFocus="close-button"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedSuperBowl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <SuperBowlModal
                      game={selectedSuperBowl}
                      onClose={() => setSelectedSuperBowl(null)}
                      teamColors={teamInfo.colors}
                      initialFocus="close-button"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedChampionship && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <ConferenceChampionshipModal
                      championship={selectedChampionship}
                      onClose={() => setSelectedChampionship(null)}
                      teamColors={teamInfo.colors}
                      initialFocus="close-button"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </RouteTransition>
    </ErrorBoundary>
  );
});

TeamPageTemplate.displayName = 'TeamPageTemplate';

export default TeamPageTemplate;
