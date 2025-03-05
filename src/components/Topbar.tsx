import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="bg-[#121212] bg-opacity-95 backdrop-blur-sm sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="bg-black bg-opacity-70 rounded-full p-1">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button className="bg-black bg-opacity-70 rounded-full p-1">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
        
        <div className="relative ml-4 hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="O que você quer ouvir?" 
            className="bg-[#242424] text-white pl-10 pr-4 py-2 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <div className="inline-flex">
        <button className="bg-black bg-opacity-0 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded-full transition-colors">
            Inscrever-se
        </button>
        <button className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full transition-colors">
            Entrar
        </button>
      </div>
    </header>
  );
};

export default TopBar;