

function CompactedCard({titulo,  capa, descricao}) {
  return (
    <div className="flex itemscenter h-16 w-full max-w-sm overflow-hidden rounded-md  bg-zinc-900 transition-colors hover:bg-zinc-800 cursor-pointer">

      <img
        src={capa}
        alt="Capa da playlist"
        className="h-full w-16 object-cover "
      />

      <div className=" p-2 ">
        <h1 className="text-lg font-bold text-white">
          {titulo}
        </h1>
        <p className="text-spotify-font-gray">
          {descricao}
        </p>
        
      </div>

    </div>
  );
}

export default CompactedCard;