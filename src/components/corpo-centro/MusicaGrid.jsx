import { Musicas } from "../../data/mockData";
import MusicaCard from "./MusicaCard";

const MusicaGrid = ({ title, setCurrentSong }) => {
  return (
    <div className="p-4">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap gap-6">
        {Musicas.map((musica) => (
          <MusicaCard
            key={musica.id}
            name={musica.name}
            artist={musica.artist}
            cover={musica.cover}
            onClick={() => setCurrentSong(musica)}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicaGrid;
