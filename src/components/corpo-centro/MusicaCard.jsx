import IconePlay from "../icones/IconePlay"

const MusicaCard = ({ name, artist, cover }) => {
  return (

    <div className="relative w-44  p-2 rounded-md flex flex-col gap-3 cursor-pointer group overflow-hidden transition-all duration-300">
      
      
      <div className="absolute inset-0 bg-spotify-card rounded-md transition-transform duration-300 ease-out transform scale-0 group-hover:scale-100 z-0 origin-center" />

     
      <div className="relative w-full aspect-square rounded-md bg-sky-300 shadow-md transition-shadow duration-300 group-hover:shadow-xl overflow-hidden z-10">
        {cover && (
          <img 
            src={cover} 
            alt={`Capa de ${name}`} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      {/* 4. Conteúdo do Card (Texto) - z-10 para ficar acima do efeito de surgimento */}
      <div className="relative flex flex-col gap-1 w-full z-10">
        <h3 className="text-white font-bold text-sm truncate">{name}</h3>
        <p className="text-spotify-font-gray text-xs truncate">{artist}</p>
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-105">
            <span className="text-black font-bold"><IconePlay/></span>
        </button>
      </div>
       
    </div>
  )
}

export default MusicaCard
