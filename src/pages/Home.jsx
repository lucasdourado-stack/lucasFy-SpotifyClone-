import { useOutletContext } from "react-router-dom";

import CompactedGrid from "../components/corpo-centro/CompactedGrid";
import BarraFiltros from "../components/corpo-centro/BarraFIltros";
import MusicaGrid from "../components/corpo-centro/MusicaGrid";
import Greeting from "../components/corpo-centro/greeting";

const Home = () => {
  const { setCurrentSong } = useOutletContext();

  return (
    <div className="h-full min-h-0 flex flex-col bg-linear-to-t from-spotify-dark from-70% to-zinc-400/60 hover:to-green-500/60 transition-colors duration-300 rounded-lg p-6 overflow-y-auto min-w-0 gap-6   ">
      <div className="flex flex-col gap-6">
        <Greeting name="Lucas" />

        <BarraFiltros />
      </div>

      <CompactedGrid />

      <MusicaGrid title="Feitas para você" setCurrentSong={setCurrentSong} />
      <MusicaGrid title="Feitas para você" setCurrentSong={setCurrentSong} />
      <MusicaGrid title="Feitas para você" setCurrentSong={setCurrentSong} />
      <MusicaGrid title="Feitas para você" setCurrentSong={setCurrentSong} />
    </div>
  );
};

export default Home;
