import React, { useState } from 'react';
import { X, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';
import { TeamInfo } from '../types';
import { historicalStats } from '../data/historicalStats';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: TeamInfo;
}

interface StatCategory {
  id: string;
  label: string;
  stats: Array<{
    year: string;
    value: number;
    rank?: number;
  }>;
}

export function StatsModal({ isOpen, onClose, team }: StatsModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('rushing');

  if (!isOpen) return null;

  const categories = [
    { id: 'rushing', label: 'Rushing Yards' },
    { id: 'passing', label: 'Passing Yards' },
    { id: 'scoring', label: 'Total Points' },
    { id: 'defense', label: 'Defensive Stats' },
    { id: 'turnover', label: 'Turnover Differential' },
  ];

  const selectedStats = historicalStats[selectedCategory as keyof typeof historicalStats];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl mx-4 relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#041E42] to-[#869397] p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart2 className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Historical Statistics</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Categories */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 mb-4">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between ${
                    selectedCategory === category.id
                      ? 'bg-[#041E42] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.label}</span>
                  {selectedCategory === category.id && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>

            {/* Stats Display */}
            <div className="md:col-span-3">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6">{
                  categories.find(c => c.id === selectedCategory)?.label
                } History</h3>
                
                <div className="space-y-4">
                  {selectedStats.map((stat) => (
                    <div
                      key={stat.year}
                      className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <span className="text-gray-600">{stat.year}</span>
                        <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
                      </div>
                      {stat.rank && (
                        <div className="text-right">
                          <span className="text-sm text-gray-500">NFL Rank</span>
                          <div className="text-lg font-semibold">#{stat.rank}</div>
                        </div>
                      )}
                      <div className="w-24 flex items-center">
                        <TrendingUp className={`w-5 h-5 ${
                          stat.rank && stat.rank <= 10 ? 'text-green-500' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}