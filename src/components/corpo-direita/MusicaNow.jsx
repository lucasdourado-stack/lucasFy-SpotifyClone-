import SobreArtista from "./SobreArtista";
import { Link } from "react-router-dom";

const MusicaNow = ({ name, cover, artist, info, artistCover, color }) => {
  return (
    <div className=" flex flex-col mt-4 gap-2">
      <img src={cover} alt="capa-Musica" className="rounded-lg" />
      <div className="mb-6">
        <Link
          to="/musicainfo"
          state={{
            musica: {
              name,
              cover,
              artist,
              info,
              artistCover,
              color,
            },
          }}>
          <h2 className="text-white text-3xl font-bold  cursor-pointer">
            {name}
          </h2>
        </Link>
        <p className="w-fit text-spotify-font-gray font-bold hover:text-white border-b border-transparent hover:border-white text-[12px] cursor-pointer">
          {artist}
        </p>
      </div>

      <SobreArtista artist={artist} cover={artistCover} sobre={info} />
    </div>
  );
};

export default MusicaNow;
