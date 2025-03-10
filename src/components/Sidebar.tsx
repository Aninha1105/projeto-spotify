import React from 'react';
import { Home, Library, Plus, Download, Music, WalletCards} from 'lucide-react';

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
    <div className="bg-black w-80 flex flex-col h-[calc(100vh-80px)]">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white mb-6">
          <Music size={32} />
          <span className="text-xl font-bold">Spotify-Project</span>
        </div>
        
        <nav className="mb-2"> {/* Reduzimos de mb-6 para mb-2 */}
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white flex items-center gap-4 py-2 px-4 rounded bg-[#282828] font-bold transition-colors">
                <Home size={24} />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 py-2 px-4 rounded hover:bg-[#282828] transition-colors">
                <WalletCards size={24} />
                <span>Navegar</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Biblioteca ajustada para subir um pouco */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="bg-[#121212] rounded-lg p-2 h-full flex flex-col">
          <div className="flex items-center justify-between p-2">
            <a href="#" className="text-gray-300 hover:text-white flex items-center gap-3 transition-colors">
              <Library size={24} />
              <span className="font-medium">Sua Biblioteca</span>
            </a>
            <button className="text-gray-300 hover:text-white rounded-full p-1 hover:bg-[#282828]">
              <Plus size={18} />
            </button>
          </div>

          <div className="mt-2 space-y-5 justify-between pr-2 flex-1">
            <div className="bg-[#242424] rounded-lg p-3">
              <h4 className="font-bold text-sm">Crie sua primeira playlist</h4>
              <p className="text-white text-xs mt-1">É fácil, vamos te ajudar.</p>
              <div className="p-2">
                <button className="bg-white text-sm text-black font-bold py-1.5 px-4 rounded-full hover:scale-105 transition-transform">
                  Criar playlist
                </button>
              </div>
            </div>

            <div className="bg-[#242424] rounded-lg p-3">
              <h4 className="font-bold text-sm">Que tal seguir um podcast novo?</h4>
              <p className="text-white text-xs mt-1">Avisaremos você sobre novos episódios.</p>
              <div className="p-2">
                <button className="bg-white text-sm text-black font-bold py-1.5 px-4 rounded-full hover:scale-105 transition-transform">
                  Explore podcasts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instalar aplicativo e Cookies antes do rodapé */}
      <div className="p-6">
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm mb-6">
          <Download size={16} />
          <span>Instalar aplicativo</span>
        </a>
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm">
          <span className="text-xs text-gray-400">cookies</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;