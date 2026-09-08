import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./side-bar/Sidebar";
import Player from "./player/Player";
import Header from "./header/Header";
import CorpoDireita from "./corpo-direita/CorpoDireita";

function Layout() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden min-h-0">
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <Header />

          <div className="flex flex-1 overflow-hidden gap-2 p-2">
            <Sidebar />

            <main className="flex-1 min-w-0 overflow-y-auto">
              <Outlet context={{ setCurrentSong }} />
            </main>

            <CorpoDireita currentSong={currentSong} />
          </div>
        </div>
      </div>

      <Player currentSong={currentSong} />
    </div>
  );
}

export default Layout;
