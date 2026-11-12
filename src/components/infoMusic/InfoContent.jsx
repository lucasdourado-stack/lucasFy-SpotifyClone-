import ButtonPlayGreen from "../button/ButtonPlayGreen";
import SongsLyric from "./SongsLyric.jsx";
const InfoContent = ({ musica, setCurrentSong }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <ButtonPlayGreen
          className="hover:scale-105"
          onClick={() => setCurrentSong(musica)}
        />
      </div>
      <div className="">
        <SongsLyric />
      </div>
    </div>
  );
};

export default InfoContent;
