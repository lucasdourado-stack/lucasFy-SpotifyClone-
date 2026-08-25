

const SobreArtista = ({ artist, cover, sobre }) => {
  return (
    <div className="max-w-[420px] rounded-lg overflow-hidden bg-spotify-card text-white font-sans">
      
      {/* Seção da Imagem com Título Sobreposto */}
      <div className="relative h-[250px] w-full">
        <h1 className="absolute top-4 left-4 text-base font-bold z-10 drop-shadow-md">
          Sobre o artista
        </h1>
        
        <img 
          src={cover} 
          alt={artist} 
          className="w-full h-full object-cover block"
        />
        
        {/* Efeito opcional de degradê no rodapé da imagem para mesclar com o fundo */}
        <div className="absolute inset-0 bg-linear-to-b from-spotify-silver/30 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Seção de Texto (Nome e Biografia) */}
      <div className="p-4 pt-5">
        <h2 className="text-xl font-bold mb-2">
          {artist}
        </h2>
        
        <p className="text-spotify-font-gray text-sm line-clamp-3 leading-relaxed">
          {sobre}
        </p>
      </div>

    </div>
  );
};

export default SobreArtista;
