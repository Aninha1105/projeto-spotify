import React from 'react';
import { Home, Search, Library, Plus, Heart, Download, Music, Clock, Pin } from 'lucide-react';

const playlists = [
  "Músicas Curtidas",
  "Descobertas da Semana",
  "Radar de Novidades",
  "Daily Mix 1",
  "Daily Mix 2",
  "Daily Mix 3",
  "Top Brasil",
  "Top Global",
  "Rock Classics",
  "Eletrônica",
  "Sertanejo",
  "Pagode"
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black w-80 flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white mb-10">
          <Music size={32} />
          <span className="text-xl font-bold">Spotify-Project</span>
        </div>
        
        <nav className="mb-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white flex items-center gap-4 py-2 px-4 rounded bg-[#282828] font-bold transition-colors">
                <Home size={24} />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 py-2 px-4 rounded hover:bg-[#282828] transition-colors">
                <Search size={24} />
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mt-2 bg-[#121212] rounded-lg p-2">
          <div className="flex items-center justify-between p-2">
            <a href="#" className="text-gray-300 hover:text-white flex items-center gap-3 transition-colors">
              <Library size={24} />
              <span className="font-medium">Sua Biblioteca</span>
            </a>
            <div className="flex gap-2">
              <button className="text-gray-300 hover:text-white rounded-full p-1 hover:bg-[#282828]">
                <Plus size={18} />
              </button>
            </div>
          </div>
          
          <div className="mt-2 space-y-5 justify-between pr-2">
            <div className="bg-[#242424] rounded-lg p-3 items-start gap-4">
              <div>
                <h4 className="font-bold text-sm">Crie sua primeira playlist</h4>
                <p className="text-white-400 text-xs mt-1">É fácil, vamos te ajudar.</p>
                <div className="p-2">
                  <button className="bg-white hover:bg-gray-200 text-black font-bold py-1.5 px-4 rounded-full text-sm transition-colors">
                    Criar playlist
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-[#242424] rounded-lg p-3 flex items-start gap-4">
              <div>
                <h4 className="font-bold text-sm">Que tal seguir um podcast novo?</h4>
                <p className="text-white-400 text-xs mt-1">Avisaremos você sobre novos episódios.</p>
                <div className="p-2">
                  <button className="bg-white hover:bg-gray-200 text-black font-bold py-1.5 px-4 rounded-full text-sm transition-colors">
                    Explore podcasts
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <div className="mt-auto p-6">
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm mb-6">
          <Download size={16} />
          <span>Instalar aplicativo</span>
        </a>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-xs text-gray-400">© 2025 Spotify-Project</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;