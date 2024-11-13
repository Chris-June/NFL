import React from 'react';
import { Trophy, Star, Gamepad2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#013369] via-[#1B48B0] to-[#013369]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495695911455-19054a55f92f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
      
      {/* Decorative Elements */}
      <Star className="absolute top-20 left-20 w-8 h-8 text-white/20 animate-pulse" />
      <Trophy className="absolute bottom-20 right-20 w-8 h-8 text-white/20 animate-pulse" />
      <Gamepad2 className="absolute top-40 right-40 w-8 h-8 text-white/20 animate-pulse" />
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-20 h-1 bg-[#D50A0A]" />
          <h1 className="text-6xl font-bold tracking-tight">NFL Teams Hub</h1>
          <div className="w-20 h-1 bg-[#D50A0A]" />
        </div>
        <p className="text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-200">
          Your gateway to comprehensive NFL team statistics, history, and real-time updates
        </p>
        <a 
          href="#teams"
          className="inline-flex items-center gap-2 bg-[#D50A0A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B30000] transition-colors"
        >
          <Trophy className="w-5 h-5" />
          Explore Teams
        </a>
      </div>
    </div>
  );
}