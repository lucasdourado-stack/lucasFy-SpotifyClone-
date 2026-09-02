// 1. Descomente o import do seu componente visual
import CompactedCard from "./CompactedCard"; 
import { Playlist } from "../../data/mockData";

function CompactedGrid() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mx-4">
        {Playlist.map((playlist) => (
          
          <CompactedCard
            key={playlist.id}
            titulo={playlist.title} 
            capa={playlist.coverUrl}  
              descricao={playlist.description} 
          />
        ))}
      </div>
    </>
  );
}

export default CompactedGrid;
