import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { TeamInfo } from '../types';

interface FooterProps {
  team: TeamInfo;
}

export function Footer({ team }: FooterProps) {
  return (
    <footer className="bg-[#013369] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{team.name} Team Hub</h3>
            <p className="text-gray-300">
              Comprehensive source for {team.name} NFL team statistics and information
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#teams" className="hover:text-white">Teams</a></li>
              <li><a href="#" className="hover:text-white">Statistics</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">API Documentation</a></li>
              <li><a href="#" className="hover:text-white">Developer Guide</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p> 2024 Intellisync Solutions. All rights reserved.</p>
          <p className="text-sm mt-2">
            NFL and team marks are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}