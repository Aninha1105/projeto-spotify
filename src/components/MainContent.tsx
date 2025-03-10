import React from 'react';
import { Play, Clock, Heart, MoreHorizontal } from 'lucide-react';

const featuredArtists = [
  {
    id: 1,
    name: 'Henrique & Juliano',
    image: 'https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4',
    type: 'Artista'
  },
  {
    id: 2,
    name: 'MC Tuto',
    image: 'https://i.scdn.co/image/ab6761610000e5eb99c26e8fb91634b00764bbb9',
    type: 'Artista'
  },
  {
    id: 3,
    name: 'Jorge & Mateus',
    image: 'https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706',
    type: 'Artista'
  },
  {
    id: 4,
    name: 'Matheus & Kauan',
    image: 'https://i.scdn.co/image/ab67616100005174b97627e4ea832ed67617627a',
    type: 'Artista'
  },
  {
    id: 5,
    name: 'Grupo Menos É Mais',
    image: 'https://i.scdn.co/image/ab6761610000e5ebc054c66bf1a3126c1d74a6ff',
    type: 'Artista'
  },
  {
    id: 6,
    name: 'Zé Neto & Cristiano',
    image: 'https://i.scdn.co/image/ab6761610000e5eb7098ffe23a919f7742979c6e',
    type: 'Artista'
  }
];

const popularAlbums = [
  {
    id: 1,
    title: 'Diamantes, Lágrimas e Rostos para Esquecer',
    artist: 'BK',
    image: 'https://i.scdn.co/image/ab67616d0000b273c078b8ed0b04b814d7457646'
  },
  {
    id: 2,
    title: 'Obrigado Deus',
    artist: 'Léo Foguete',
    image: 'https://i.scdn.co/image/ab67616d0000b273410c1c50cd048f96f817a12d'
  },
  {
    id: 3,
    title: '333',
    artist: 'Matuê',
    image: 'https://i.scdn.co/image/ab67616d0000b27363ecdc2fc549275b51fbb9a7'
  },
  {
    id: 4,
    title: 'O Céu Explica Tudo (Ao Vivo)',
    artist: 'Henrique & Juliano',
    image: 'https://i.scdn.co/image/ab67616d0000b27399c540c0f78793fcea84a920'
  },
  {
    id: 5,
    title: 'Ensaios Da Anitta',
    artist: 'Anitta',
    image: 'https://i.scdn.co/image/ab67616d0000b273de417d1ffcbd0042639473e3'
  },
  {
    id: 6,
    title: 'HIT ME HARD AND SOFT',
    artist: 'Billie Eilish',
    image: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62'
  }
];

const songs = [
  { id: 1, title: 'Música Popular', artist: 'Artista 1', album: 'Álbum 1', duration: '3:24', plays: '1,234,567', addedAt: '3 dias atrás' },
  { id: 2, title: 'Canção do Verão', artist: 'Artista 2', album: 'Álbum 2', duration: '2:45', plays: '987,654', addedAt: '1 semana atrás' },
  { id: 3, title: 'Melodia Noturna', artist: 'Artista 3', album: 'Álbum 3', duration: '4:12', plays: '876,543', addedAt: '2 semanas atrás' },
  { id: 4, title: 'Batida Eletrônica', artist: 'Artista 4', album: 'Álbum 4', duration: '3:56', plays: '765,432', addedAt: '1 mês atrás' },
  { id: 5, title: 'Acústico Suave', artist: 'Artista 5', album: 'Álbum 5', duration: '3:33', plays: '654,321', addedAt: '1 mês atrás' },
];

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-y-auto pb-8">
      <section className="px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Artistas populares</h2>
          <a href="#" className="text-sm text-gray-400 font-bold hover:underline">Mostrar tudo</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredArtists.map(artist => (
            <div key={artist.id} className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-colors group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full aspect-square object-cover rounded-full shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-[#1db954] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform translate-y-2 group-hover:translate-y-0">
                  <Play size={20} className="text-black" fill="black" />
                </button>
              </div>
              <h3 className="text-white font-bold truncate">{artist.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{artist.type}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="px-8 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Singles e álbuns que todo mundo gosta</h2>
          <a href="#" className="text-sm text-gray-400 font-bold hover:underline">Mostrar tudo</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularAlbums.map(album => (
            <div key={album.id} className="bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-colors group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={album.image} 
                  alt={album.title} 
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-[#1db954] rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform translate-y-2 group-hover:translate-y-0">
                  <Play size={20} className="text-black" fill="black" />
                </button>
              </div>
              <h3 className="text-white font-bold truncate">{album.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{album.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;