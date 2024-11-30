import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { TeamGrid } from './components/TeamGrid';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { RouteTransition } from './components/RouteTransition';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BackToTop } from './components/BackToTop';
import { TeamComparison } from './components/TeamComparison';
import { Navbar } from './components/Navbar';

// Lazy load all team pages
// AFC North
const RavensPage = lazy(() => import('./pages/RavensPage').then(module => ({ default: module.RavensPage })));
const BengalsPage = lazy(() => import('./pages/BengalsPage').then(module => ({ default: module.BengalsPage })));
const BrownsPage = lazy(() => import('./pages/BrownsPage').then(module => ({ default: module.BrownsPage })));
const SteelersPage = lazy(() => import('./pages/SteelersPage').then(module => ({ default: module.SteelersPage })));

// AFC South
const ColtsPage = lazy(() => import('./pages/ColtsPage').then(module => ({ default: module.ColtsPage })));
const TexansPage = lazy(() => import('./pages/TexansPage').then(module => ({ default: module.TexansPage })));
const JaguarsPage = lazy(() => import('./pages/JaguarsPage').then(module => ({ default: module.JaguarsPage })));
const TitansPage = lazy(() => import('./pages/TitansPage').then(module => ({ default: module.TitansPage })));

// AFC East
const BillsPage = lazy(() => import('./pages/BillsPage').then(module => ({ default: module.BillsPage })));
const DolphinsPage = lazy(() => import('./pages/DolphinsPage').then(module => ({ default: module.DolphinsPage })));
const PatriotsPage = lazy(() => import('./pages/PatriotsPage').then(module => ({ default: module.PatriotsPage })));
const JetsPage = lazy(() => import('./pages/JetsPage').then(module => ({ default: module.JetsPage })));

// AFC West
const BroncosPage = lazy(() => import('./pages/BroncosPage').then(module => ({ default: module.BroncosPage })));
const ChiefsPage = lazy(() => import('./pages/ChiefsPage').then(module => ({ default: module.ChiefsPage })));
const RaidersPage = lazy(() => import('./pages/RaidersPage').then(module => ({ default: module.RaidersPage })));
const ChargersPage = lazy(() => import('./pages/ChargersPage').then(module => ({ default: module.ChargersPage })));

// NFC North
const BearsPage = lazy(() => import('./pages/BearsPage').then(module => ({ default: module.BearsPage })));
const LionsPage = lazy(() => import('./pages/LionsPage').then(module => ({ default: module.LionsPage })));
const PackersPage = lazy(() => import('./pages/PackersPage').then(module => ({ default: module.PackersPage })));
const VikingsPage = lazy(() => import('./pages/VikingsPage').then(module => ({ default: module.VikingsPage })));

// NFC South
const BuccaneersPage = lazy(() => import('./pages/BuccaneersPage').then(module => ({ default: module.BuccaneersPage })));
const FalconsPage = lazy(() => import('./pages/FalconsPage').then(module => ({ default: module.FalconsPage })));
const PanthersPage = lazy(() => import('./pages/PanthersPage').then(module => ({ default: module.PanthersPage })));
const SaintsPage = lazy(() => import('./pages/SaintsPage').then(module => ({ default: module.SaintsPage })));

// NFC East
const CowboysPage = lazy(() => import('./pages/CowboysPage').then(module => ({ default: module.CowboysPage })));
const EaglesPage = lazy(() => import('./pages/EaglesPage').then(module => ({ default: module.EaglesPage })));
const GiantsPage = lazy(() => import('./pages/GiantsPage').then(module => ({ default: module.GiantsPage })));
const CommandersPage = lazy(() => import('./pages/CommandersPage').then(module => ({ default: module.CommandersPage })));

// NFC West
const CardinalsPage = lazy(() => import('./pages/CardinalsPage').then(module => ({ default: module.CardinalsPage })));
const FortyNinersPage = lazy(() => import('./pages/FortyNinersPage').then(module => ({ default: module.FortyNinersPage })));
const RamsPage = lazy(() => import('./pages/RamsPage').then(module => ({ default: module.RamsPage })));
const SeahawksPage = lazy(() => import('./pages/SeahawksPage').then(module => ({ default: module.SeahawksPage })));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <RouteTransition>
            <Routes>
              <Route path="/" element={
                <div className="min-h-screen bg-gray-50">
                  <Hero />
                  <TeamGrid />
                  <Footer />
                  <BackToTop />
                </div>
              } />
              
              {/* AFC North Routes */}
              <Route path="/ravens" element={<><RavensPage /><BackToTop /></>} />
              <Route path="/bengals" element={<><BengalsPage /><BackToTop /></>} />
              <Route path="/browns" element={<><BrownsPage /><BackToTop /></>} />
              <Route path="/steelers" element={<><SteelersPage /><BackToTop /></>} />

              {/* AFC South Routes */}
              <Route path="/colts" element={<><ColtsPage /><BackToTop /></>} />
              <Route path="/texans" element={<><TexansPage /><BackToTop /></>} />
              <Route path="/jaguars" element={<><JaguarsPage /><BackToTop /></>} />
              <Route path="/titans" element={<><TitansPage /><BackToTop /></>} />

              {/* AFC East Routes */}
              <Route path="/bills" element={<><BillsPage /><BackToTop /></>} />
              <Route path="/dolphins" element={<><DolphinsPage /><BackToTop /></>} />
              <Route path="/patriots" element={<><PatriotsPage /><BackToTop /></>} />
              <Route path="/jets" element={<><JetsPage /><BackToTop /></>} />

              {/* AFC West Routes */}
              <Route path="/broncos" element={<><BroncosPage /><BackToTop /></>} />
              <Route path="/chiefs" element={<><ChiefsPage /><BackToTop /></>} />
              <Route path="/raiders" element={<><RaidersPage /><BackToTop /></>} />
              <Route path="/chargers" element={<><ChargersPage /><BackToTop /></>} />

              {/* NFC North Routes */}
              <Route path="/bears" element={<><BearsPage /><BackToTop /></>} />
              <Route path="/lions" element={<><LionsPage /><BackToTop /></>} />
              <Route path="/packers" element={<><PackersPage /><BackToTop /></>} />
              <Route path="/vikings" element={<><VikingsPage /><BackToTop /></>} />

              {/* NFC South Routes */}
              <Route path="/buccaneers" element={<><BuccaneersPage /><BackToTop /></>} />
              <Route path="/falcons" element={<><FalconsPage /><BackToTop /></>} />
              <Route path="/panthers" element={<><PanthersPage /><BackToTop /></>} />
              <Route path="/saints" element={<><SaintsPage /><BackToTop /></>} />

              {/* NFC East Routes */}
              <Route path="/cowboys" element={<><CowboysPage /><BackToTop /></>} />
              <Route path="/eagles" element={<><EaglesPage /><BackToTop /></>} />
              <Route path="/giants" element={<><GiantsPage /><BackToTop /></>} />
              <Route path="/commanders" element={<><CommandersPage /><BackToTop /></>} />

              {/* NFC West Routes */}
              <Route path="/cardinals" element={<><CardinalsPage /><BackToTop /></>} />
              <Route path="/49ers" element={<><FortyNinersPage /><BackToTop /></>} />
              <Route path="/rams" element={<><RamsPage /><BackToTop /></>} />
              <Route path="/seahawks" element={<><SeahawksPage /><BackToTop /></>} />

              <Route path="/compare" element={<TeamComparison />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RouteTransition>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;