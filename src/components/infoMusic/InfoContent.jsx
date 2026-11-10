import ButtonPlayGreen from "../button/ButtonPlayGreen";

const InfoContent = ({ musica, setCurrentSong }) => {
  return (
    <div>
      <ButtonPlayGreen
        className="hover:scale-105"
        onClick={() => setCurrentSong(musica)}
      />
    </div>
  );
};

export default InfoContent;
