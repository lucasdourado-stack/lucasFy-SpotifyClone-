import { useState } from "react";
import ProgressBar from "./ProgressBar";
import IconePular from "../icones/IconePular";
import IconeVoltar from "../icones/IconeVoltar";
import IconePausar from "../icones/IconePausar";
import IconePlay from "../icones/IconePlay";

function Player({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePLay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <footer className="h-20 bg-black border-t border-zinc-800 px-4 flex items-center">
      {/* Esquerda */}
      <div className="flex items-center gap-3 flex-1">
        <img
          className="w-14 h-14 rounded block-auto"
          src={currentSong?.cover}
          alt="Capa da música"
        />
        <div className="flex-col cursor-pointer hidden md:flex">
          <strong className="w-fit border-b border-transparent hover:border-white">
            {currentSong?.name}
          </strong>
          <span className="w-fit text-zinc-400 font-bold hover:text-white border-b border-transparent hover:border-white text-[12px]">
            {currentSong?.artist}
          </span>
        </div>
      </div>

      {/* Centro */}
      <div className="w-full flex-1 flex flex-col items-center">
        <div className="flex gap-5 items-center">
          <button className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <IconeVoltar />
          </button>

          <button
            onClick={togglePLay}
            className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-110 transition-transform cursor-pointer">
            {isPlaying ? <IconePausar /> : <IconePlay />}
          </button>

          <button className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
            <IconePular />
          </button>
        </div>

        <div className="w-full max-w-xl mt-2">
          <ProgressBar />
        </div>
      </div>

      {/* Direita */}
      <div className="flex-1"></div>
    </footer>
  );
}

export default Player;
