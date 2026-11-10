const Header = ({ titulo, coverUrl, artist }) => {
  return (
    <div className="flex flex-row gap-6 items-end p-6 relative z-10">
      <img
        src={coverUrl}
        alt={`Capa de ${titulo}`}
        className="h-60 w-60 object-cover rounded shadow-2xl"
      />

      <div className="flex flex-col gap-5">
        <h4 className="font-bold">Música</h4>
        <h2 className="text-8xl font-bold">{titulo}</h2>
        <a href="#" className="font-bold hover:underline">
          {artist}
        </a>
      </div>
    </div>
  );
};

export default Header;
