import IconePlay from "../Icones/IconePlay";

const BotaoPlay = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center cursor-pointer">
      <span className="text-black font-bold">
        <IconePlay />
      </span>
    </button>
  );
};

export default BotaoPlay;
