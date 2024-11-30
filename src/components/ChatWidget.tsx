import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, AlertCircle, Zap } from "lucide-react";
import { getTeamTheme } from "../utils/teamColors";
import { useChat } from "../hooks/useChat";
import { mascots } from "../data/mascots";

interface ChatWidgetProps {
  teamId: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ teamId }) => {
  const theme = getTeamTheme(teamId);
  const mascot = mascots[teamId];
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { messages, sendMessage, isLoading, partialResponse, error, fallbackMode } = useChat(mascot);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg z-50"
        style={{ backgroundColor: theme.primary }}
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div 
              className="p-4 flex items-center justify-between rounded-t-lg"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={mascot.avatar}
                  alt={mascot.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-white">{mascot.name}</h3>
                  <p className="text-xs text-white/80">Team Mascot</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-lg space-x-1">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce delay-100">•</span>
                    <span className="animate-bounce delay-200">•</span>
                  </div>
                </motion.div>
              )}
              {partialResponse && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                    {partialResponse}
                  </div>
                </motion.div>
              )}
              {error && (
                <div className="flex items-center space-x-2 text-red-500 p-2">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Error: {error}</span>
                </div>
              )}
              {fallbackMode && (
                <div className="flex items-center space-x-2 text-yellow-500 p-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Running in fallback mode</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about the team..."
                  className="flex-1 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2"
                  style={{ focusRing: theme.primary }}
                  rows={1}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: theme.primary }}
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
