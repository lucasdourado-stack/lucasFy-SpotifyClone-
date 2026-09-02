import ProgressBar from "./ProgressBar"
import IconePular from "../icones/IconePular";
import IconeVoltar from "../icones/IconeVoltar";
import IconePausar from "../icones/IconePausar";


function Player() {
  return (
    <footer className="h-20 bg-black border-t border-zinc-800 px-4 flex items-center">

  {/* Esquerda */}
  <div className="flex items-center gap-3 flex-1">
     <img className="w-14 h-14 rounded block-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ono2afjC_6OH1ryutQj88aT83qqXcqPdtnuE09q7PQ&s=10' alt="Gradient cover" />
    <div className=" flex-col cursor-pointer hidden md:flex ">
      <strong className="w-fit border-b border-transparent hover:border-white ">All Falls Down</strong>
      <span className="w-fit text-zinc-400 font-bold hover:text-white border-b border-transparent hover:border-white text-[12px]">kanye West, Syleena Johnson</span>
    </div>
  </div>

  {/* Centro */}
  <div className=" w-full flex-1 flex flex-col items-center">

    <div className="flex gap-5">

    <button className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
      <IconeVoltar/>
    </button>

     <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-110 transition-transform cursor-pointer">
      <IconePausar/>
    </button>

         <button className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
        <IconePular/>
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