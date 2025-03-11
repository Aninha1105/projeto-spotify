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

const popularRadios = [
  { id: 1,
    title: 'Rádio Charlie Brown Jr.',
    description: 'Com O Rappa, Skank, Os Paralamas do Sucesso e mais',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/1on7ZQ2pvgeQF4vmIA09x5/en'
  },
  { id: 2,
    title: "Rádio Henrique & Juliano",
    description: 'Com Diego & Victor Hugo, Murilo Huff, Cristiano Araújo e ...',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3p7PcrEHaaKLJnPUGOtRlT/en'
  },
  { id: 3,
    title: "Rádio Mc Tuto",
    description: 'Com Mc Negão Original, Mc IG, Mc Marks e mais ',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6aoGgTKGqtsjj48ymcNs4Z/fr'
  },
  { id: 4,
    title: "Rádio Jorge & Mateus",
    description: 'Com Henrique & Juliano, Cristiano Araújo, Diego & Victor...',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/1elUiq4X7pxej6FRlrEzjM/en'
  },
  { id: 5,
    title: "Rádio Us Agroboy",
    description: 'Com Léo & Raphael, Antony & Gabriel, João Nelore & Texano...',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/7gXnv2nAoF9X0XJQ3AMp7d/en'
  },
  { id: 6,
    title: "Rádio Bruno Mars",
    description: 'Com Ed Sheeran, Katy Perry, Shawn Mendes e mais',
    image: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0du5cEVh5yTK9QJze8zA0C/en'
  }
];

const hitParade = [
  { id: 1,
    title: "Top Músicas Mundo",
    description: "Mundo: seu relatório semanal das faixas mais tocadas no...",
    image: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
  },
  { id: 2,
    title: "Top Músicas Brasil",
    description: "Brasil: seu relatório semanal das faixas mais tocadas no...",
    image: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_br_default.jpg",
  },
  { id: 3,
    title: "Top 50 Mundo",
    description: "Mundo: seu relatório diário das faixas mais tocadas no...",
    image: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
  },
  { id: 4,
    title: "Top 50 Brasil",
    description: "Brasil: seu relatório diário das faixas mais tocadas no...",
    image: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_br_default.jpg",
  },
  { id: 5,
    title: "Viral 50 Mundo",
    description: "Mundo: seu relatório diário das faixas que viralizaram.",
    image: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
  },
  { id: 6,
    title: "Viral 50 Brasil",
    description: "Brasil: seu relatório diário das faixas que viralizaram.",
    image: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_br_default.jpg",
  }
];

const hitsBrasil = [
  { id: 1,
    title: "Top Brasil",
    description: "Kew, DJ LK da Escócia e os maiores hits do país. O que tá bombando tá aqui.",
    image: "https://i.scdn.co/image/ab67706f00000002396f5b8be3613b2562b17afb",
  },
  { id: 2,
    title: "Esquenta Sertanejo",
    description: "O melhor do sertanejo em uma só playlist!",
    image: "https://i.scdn.co/image/ab67706f00000002ece1f38c71c8539e49b433de",
  },
  { id: 3,
    title: "Funk Hits",
    description: "Descer e os funks mais 🔑 do Brasil.",
    image: "https://i.scdn.co/image/ab67706f000000021c791df340b61b18e7de0917",
  },
  { id: 4,
    title: "Pagodeira",
    description: "Os sucessos e as novidades dos grandes nomes do pagode.",
    image: "https://i.scdn.co/image/ab67706f000000020d1e24ee84473d116e9d4dfb",
  },
  { id: 5,
    title: "Sucessos Gospel",
    description: "A palavra do Senhor na voz de grandes adoradores do Brasil. ",
    image: "https://i.scdn.co/image/ab67706f000000023ad3d452ff32e163b6686115",
  },
  { id: 6,
    title: "Paredão Explode",
    description: "Os hits do forró, arrocha, pagodão e bregadeira!",
    image: "https://i.scdn.co/image/ab67706f0000000229c292bae0752fd5327ba34c",
  }
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
              <h3 className="text-white truncate">{artist.name}</h3>
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
              <h3 className="text-white truncate">{album.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{album.artist}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-4">
        <div className="flex justify-between items center mb-4">
          <h2 className="text-2xl font-bold text-white">Estações de rádio populares</h2>
          <a href= "#" className="text-sm text-gray-400 font-bold hover:underline">Mostrar tudo</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularRadios.map(radio =>(
            <div key={radio.id} className="bg-spotify-gray hover:bg-spotify-light-gray p-4 rounded-lg transition colors group cursor-pointer">
              <div className="relative mb-4">
                <img
                  src={radio.image}
                  alt={radio.title}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform translate-y-2 group-hover:translate-y-0">
                  <Play size={20} className="text-black" fill="black" />
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">{radio.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-4">
      <div className="flex justify-between items center mb-4">
          <h2 className="text-2xl font-bold text-white">Paradas em destaque</h2>
          <a href= "#" className="text-sm text-gray-400 font-bold hover:underline">Mostrar tudo</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hitParade.map(playlist =>(
            <div key={playlist.id} className="bg-spotify-gray hover:bg-spotify-light-gray p-4 rounded-lg transition colors group cursor-pointer">
              <div className="relative mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform translate-y-2 group-hover:translate-y-0">
                  <Play size={20} className="text-black" fill="black" />
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-4">
      <div className="flex justify-between items center mb-4">
          <h2 className="text-2xl font-bold text-white">Bom dia com os maiores hits do Brasil!</h2>
          <a href= "#" className="text-sm text-gray-400 font-bold hover:underline">Mostrar tudo</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hitsBrasil.map(playlist =>(
            <div key={playlist.id} className="bg-spotify-gray hover:bg-spotify-light-gray p-4 rounded-lg transition colors group cursor-pointer">
              <div className="relative mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-spotify-green rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform translate-y-2 group-hover:translate-y-0">
                  <Play size={20} className="text-black" fill="black" />
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;