import { useLocation, useOutletContext } from "react-router-dom";
import InfoContent from "../components/infoMusic/InfoContent.jsx";
import Header from "../components/infoMusic/Header";

const MusicaInfo = () => {
  const location = useLocation();
  const { setCurrentSong } = useOutletContext();
  const musica = location.state?.musica;

  if (!musica) {
    return <p>Nenhuma música encontrada.</p>;
  }

  return (
    <div className="relative min-h-full overflow-y-auto rounded-lg bg-[#121212]">
      {/* Fundo desfocado e gradiente */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              ${musica.color} 0%,
              ${musica.color}99 35%,
              #121212 100%
            )
          `,
        }}></div>

      <Header
        titulo={musica.name}
        artist={musica.artist}
        coverUrl={musica.cover}
      />

      <div className=" flex-1 min-h-0 backdrop-blur-xl bg-white/1 border-t border-white/2 p-6">
        <InfoContent musica={musica} setCurrentSong={setCurrentSong} />
      </div>
    </div>
  );
};

export default MusicaInfo;
