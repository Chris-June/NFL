import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquare, X, Send, AlertCircle, Zap } from 'lucide-react';
import { getTeamTheme } from '../data/teamColors';
import { useChat } from '../hooks/useChat';
import { mascots } from '../data/mascots';

export const ChatWidget: React.FC = () => {
  const { teamId = 'cowboys' } = useParams<{ teamId: string }>();
  const theme = getTeamTheme(teamId);
  const mascot = mascots[teamId];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading, partialResponse, error, fallbackMode } = useChat(mascot);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, partialResponse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const message = input;
    setInput('');
    await sendMessage(message);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-105"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 flex flex-col">
          <div 
            className="p-4 flex justify-between items-center"
            style={{ backgroundColor: theme.colors.primary }}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-white font-bold">Chat with {mascot.name}</h2>
              {fallbackMode && (
                <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Energy Saving
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-white/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                  {partialResponse || (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {error && !fallbackMode && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">Service temporarily unavailable</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
                style={{ 
                  focusRing: theme.colors.primary 
                }}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="p-2 rounded-lg text-white transition-colors hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: theme.colors.primary }}
                disabled={isLoading}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;