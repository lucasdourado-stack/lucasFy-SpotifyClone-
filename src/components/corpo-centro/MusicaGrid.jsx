// Importamos o mockData (que você chamou de Musicas)
import { Musicas } from "../../data/mockData"

import MusicaCard from "./MusicaCard" // Ajuste o caminho da pasta se necessário

const MusicaGrid = ({ title }) => {
  return (
    <div className="p-4">
      {/* Título do grid (ex: "Minhas Músicas") */}
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      {/* Container flex que vai alinhar os cards lado a lado */}
      <div className="flex flex-wrap gap-6">
        {Musicas.map((musica) => (
          <MusicaCard
            key={musica.id}
            name={musica.name}
            artist={musica.artist}
            cover={musica.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default MusicaGrid
