import MusicaNow from "./MusicaNow";

const CorpoDireita = ({ currentSong }) => {
  if (!currentSong) {
    return (
      <div className="w-56 sm:w-64 md:w-96 lg:w-[400px] hidden md:flex flex-col shrink-0 max-h-full rounded-lg p-4 overflow-y-auto bg-spotify-dark">
        <p className="text-white text-2xl font-bold mb-4">
          Selecione uma música
        </p>
      </div>
    );
  }

  return (
    <div className="w-56 sm:w-64 md:w-96 lg:w-[400px] hidden md:flex flex-col shrink-0 max-h-full rounded-lg p-4 overflow-y-auto bg-spotify-dark">
      <MusicaNow
        cover={currentSong.cover}
        name={currentSong.name}
        artist={currentSong.artist}
        artistCover={currentSong.artistCover}
        info={currentSong.info}
      />
    </div>
  );
};

export default CorpoDireita;
