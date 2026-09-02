import Sidebar from './components/side-bar/Sidebar';
import Player from './components/player/Player';
import Header from './components/header/Header';
import CompactedGrid from './components/corpo-centro/CompactedGrid';
import BarraFiltros from './components/corpo-centro/BarraFIltros';
import CorpoDireita from './components/corpo-direita/CorpoDireita';
import MusicaGrid from './components/corpo-centro/MusicaGrid';
import Greeting from './components/corpo-centro/greeting';
import ButtonGreen from './components/button/ButtonGreen';
// import { Generos } from './data/mockData';

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col">
        <div className="flex flex-1 overflow-hidden min-h-0">
          {/* Coluna do meio + direita */}
          <div className="flex flex-col flex-1 min-w-0 min-h-0">
            <Header />
            {/* Conteúdo abaixo do Header */}
            <div className="flex flex-1 overflow-hidden gap-2 p-2">
              <Sidebar />
              <main className="flex flex-col flex-1 bg-linear-to-t from-spotify-dark from-70% to-zinc-400/60 hover:to-green-500/60 transition-colors duration-300 rounded-lg p-6 overflow-y-auto min-w-0 gap-6">
                <div className="flex gap-2 flex-wrap">
                  {/* {Generos.map(genero => (
                    <span key={genero} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                      {genero}
                    </span>
                  ))} */}
                </div>
                <div className="flex flex-col gap-6">
                  <Greeting name="Lucas" />
                  <BarraFiltros />
                </div>
                <CompactedGrid />
                <MusicaGrid title="Feitas para você">
                </MusicaGrid>
                <ButtonGreen label="Play" />
              </main>
              <CorpoDireita />
            </div>
          </div>
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
