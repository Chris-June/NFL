import React from 'react';
import { Play, Eye, Calendar } from 'lucide-react';

interface VideoHighlightProps {
  title: string;
  description: string;
  date: string;
  thumbnailUrl: string;
  views: string;
}

export function VideoHighlight({ title, description, date, thumbnailUrl, views }: VideoHighlightProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
}