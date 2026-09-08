import IconePlay from "../icones/IconePlay";
import { Link } from "react-router-dom";

const MusicaCard = ({ name, artist, cover, onClick }) => {
  return (
    <div className="relative w-44 p-2 rounded-md flex flex-col gap-3 cursor-pointer group overflow-hidden transition-all duration-300">
      <Link to="/musicainfo">
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

        <div className="relative flex flex-col gap-1 w-full z-10">
          <h3 className="text-white font-bold text-sm truncate">{name}</h3>

          <p className="text-spotify-font-gray text-xs truncate">{artist}</p>
        </div>
      </Link>
      <div className="relative flex flex-col gap-1 w-full z-10">
        <button
          onClick={onClick}
          className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-110 hover:bg-spotify-green-bright cursor-pointer">
          <span className="text-black font-bold ">
            <IconePlay />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MusicaCard;
