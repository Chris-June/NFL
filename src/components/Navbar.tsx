import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart2, Search, MessageSquare } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: BarChart2, label: 'Compare Teams', to: '/compare' },
    { icon: Search, label: 'Search', to: '/search' },
    { icon: MessageSquare, label: 'Chat', to: '/chat' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:top-0 md:bottom-auto z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around md:justify-start md:gap-8 h-16">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              <item.icon className="w-6 h-6 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
