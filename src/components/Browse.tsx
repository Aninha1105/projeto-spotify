import React from 'react';

interface Category {
  id: number;
  title: string;
  color: string;
  image: string;
}
  
const categories: Category[] = [
  {
    id: 1,
    title: 'Música',
    color: 'bg-[#E13364]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb'
  },
  {
    id: 2,
    title: 'Podcasts',
    color: 'bg-[#8AB73F]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf912a3b760de9cfef7a342f9d'
  },
  {
    id: 3,
    title: 'Eventos ao vivo',
    color: 'bg-[#B373E6]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf4ea1c8bf1b6d8667a59e1a32'
  },
  {
    id: 4,
    title: 'Feito para você',
    color: 'bg-[#1E3264]',
    image: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe'
  },
  {
    id: 5,
    title: 'Lançamentos',
    color: 'bg-[#E9193A]',
    image: 'https://i.scdn.co/image/ab67fb8200005cafebf27444a1a00c68f75b7672'
  },
  {
    id: 6,
    title: 'Brasil',
    color: 'bg-[#1E3264]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf55a451b390bb917eba87a0f8'
  },
  {
    id: 7,
    title: 'Sertanejo',
    color: 'bg-[#BA5D07]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf7f04942758f518b3f8e2ba96'
  },
  {
    id: 8,
    title: 'Funk',
    color: 'bg-[#148CE8]',
    image: 'https://i.scdn.co/image/ab67fb8200005cafbfcc92e025064ff9bf3f9f8e'
  },
  {
    id: 9,
    title: 'Samba e pagode',
    color: 'bg-[#8AB73F]',
    image: 'https://i.scdn.co/image/ab67fb8200005cafa8ef52eb5034a67b055c4c4f'
  },
  {
    id: 10,
    title: 'Paradas de podcast',
    color: 'bg-[#148CE8]',
    image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg'
  },
  {
    id: 11,
    title: 'Lançamentos de Podcasts',
    color: 'bg-[#E9193A]',
    image: 'https://i.scdn.co/image/ab67fb8200005caf680b060798d9e50d0c6ed5aa'
  },
  {
    id: 12,
    title: 'Podcasts com vídeo',
    color: 'bg-[#E61E32]',
    image: 'https://i.scdn.co/image/ab6765630000ba8ada018f5c18ecebc5d3ff3b59'
  }
];

const Browse: React.FC = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-y-auto p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Navegar por todas as seções</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
          <div
            key={category.id}
            className={`${category.color} rounded-lg overflow-hidden relative aspect-square cursor-pointer group hover:scale-[1.02] transition-transform`}
          >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover opacity-60"
            />
            <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;