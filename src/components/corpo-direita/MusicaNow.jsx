import SobreArtista from "./SobreArtista"

const MusicaNow = ({name, cover, artist, sobre, sobreCover }) => {
  return (
    <div className=" flex flex-col mt-4 gap-2">
        <img src={cover} alt="capa-Musica" className="rounded-lg" />
        <div className="mb-6">
        <h2 className="text-white text-3xl font-bold  cursor-pointer">{name}</h2>
        <p className="w-fit text-spotify-font-gray font-bold hover:text-white border-b border-transparent hover:border-white text-[12px] cursor-pointer">{artist}</p>

        </div>

        <SobreArtista artist={artist} cover={sobreCover} sobre={sobre}/>
        
    </div>
  )
}

export default MusicaNow
