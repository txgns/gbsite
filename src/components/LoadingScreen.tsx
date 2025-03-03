
import React from 'react';
import { Bot } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-robotics-black flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-6 relative">
          <div className="w-24 h-24 rounded-full bg-robotics-purple/20 animate-pulse-subtle flex items-center justify-center">
            <Bot size={64} className="text-robotics-purple animate-bounce" />
          </div>
          <div className="absolute inset-0 rounded-full border-t-2 border-robotics-purple animate-spin" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
          GAMBIARRA ROBOTICS
        </h2>
        
        <p className="text-white/70 max-w-md mx-auto">
          Carregando nossa loja...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
