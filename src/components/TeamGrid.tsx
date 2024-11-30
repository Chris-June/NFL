import React from "react";
import { nflTeams } from "../data/nflTeams";
import { Shield, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function TeamGrid() {
  return (
    <section id="teams" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-[#013369]" />
            <h2 className="text-4xl font-bold text-[#013369]">NFL Teams</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive team statistics, player profiles, and historical achievements
          </p>
        </motion.div>

        {/* Teams Grid */}
        {Object.entries(nflTeams).map(([conference, divisions]) => (
          <div key={conference} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#013369] mb-8 text-center"
            >
              {conference}
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {Object.entries(divisions).map(([division, teams]) => (
                <motion.div
                  key={division}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#013369]" />
                    <h3 className="text-xl font-bold text-[#013369]">
                      {division}
                    </h3>
                  </div>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-4"
                  >
                    {teams.map((team) => (
                      <TeamCard
                        key={team.id}
                        team={team}
                        conference={conference}
                        division={division}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
