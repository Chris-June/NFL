import React from 'react';
import { Trophy, Star, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatsTicker } from './StatsTicker';

export function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#013369] via-[#1B48B0] to-[#013369]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495695911455-19054a55f92f?auto=format&fit=crop&q=80')] bg-cover bg-center"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#013369]/50 to-[#013369]/90" />
      </div>
      
      {/* Animated Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Star className="absolute top-20 left-20 w-8 h-8 text-white/20 animate-pulse" />
        <Trophy className="absolute bottom-20 right-20 w-8 h-8 text-white/20 animate-pulse" />
        <Gamepad2 className="absolute top-40 right-40 w-8 h-8 text-white/20 animate-pulse" />
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#D50A0A]"
          />
          <h1 className="text-6xl font-bold tracking-tight">NFL Teams Hub</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-[#D50A0A]"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-200"
        >
          Your gateway to comprehensive NFL team statistics, history, and real-time updates
        </motion.p>
        
        <motion.a
          href="#teams"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-[#D50A0A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B30000] transition-colors"
        >
          <Trophy className="w-5 h-5" />
          Explore Teams
        </motion.a>
      </div>

      {/* Stats Ticker */}
      <StatsTicker />
    </div>
  );
}