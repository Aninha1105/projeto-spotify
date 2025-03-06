import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex left-0 right-0 bg-gradient-to-r from-[#9e5680] to-[#ecd504] px-10 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-white uppercase font-bold text-xs mb-2.5">
            Experimente o Premium gratuitamente
          </h2>
          <p className="text-white text-sm font-medium">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="bg-white text-black text-base font-bold py-3.5 px-8 rounded-full hover:scale-105 transition-transform">
            Inscreva-se grátis
          </button>
        </div>
    </footer>
  );
};

export default Footer;