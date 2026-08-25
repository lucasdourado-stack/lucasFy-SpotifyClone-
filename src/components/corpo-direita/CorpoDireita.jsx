import MusicaNow from "./MusicaNow";

const CorpoDireita = () => {
  return (
    <div className="w-56 sm:w-64 md:w-96 lg:w-[400px] hidden md:flex flex-col shrink-0 max-h-full rounded-lg p-4 overflow-y-auto bg-spotify-dark ">
      {/* conteúdo da direita aqui */}
      <MusicaNow 
        cover='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ono2afjC_6OH1ryutQj88aT83qqXcqPdtnuE09q7PQ&s=10'
        name='All Falls Down'
        artist='Kanye West'
        sobreCover='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSigP40WE2nucT91WAr1tCVAPi8oVBxuiwsPkDnm6Tg&s=10'
        sobre="Ye é um rapper, cantor, compositor, produtor musical e estilista estadunidense. Considerado um dos maiores rappers de todos os tempos e uma das figuras mais proeminentes do hip-hop."
      />
    </div>
  );
};

export default CorpoDireita;
