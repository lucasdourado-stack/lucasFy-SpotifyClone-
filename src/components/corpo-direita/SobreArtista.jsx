import { useState } from "react";

const SobreArtista = ({ artist, cover, sobre }) => {
  const [expanded, SetExpanded] = useState(false);
  const maxCaraters = 100;

  return (
    <div className="max-w-[520px] rounded-lg overflow-hidden bg-spotify-card text-white font-sans">
      <div className="relative h-[250px] w-full">
        <h1 className="absolute top-4 left-4 text-base font-bold z-10 drop-shadow-md">
          Sobre o artista
        </h1>

        <img
          src={cover}
          alt={artist}
          className="w-full h-full object-cover block"
        />

        <div className="absolute inset-0 bg-linear-to-b from-spotify-silver/30 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-4 pt-5">
        <h2 className="text-xl font-bold mb-2">{artist}</h2>

        <div className="text-spotify-font-gray text-justify">
          <p className="text-sm leading-relaxed">
            {expanded ? sobre : `${sobre.substring(0, maxCaraters)}...`}
          </p>
          <button
            className="text-white font-bold cursor-pointer hover:underline flex 
            float-right"
            onClick={() => SetExpanded(!expanded)}>
            {expanded ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SobreArtista;
