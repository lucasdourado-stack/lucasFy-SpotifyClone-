import IconeLupa from "../../icones/IconeLupa";

const BarraPesquisa = () => {
  return (
    <div className="flex-1 flex justify-center min-w-0">
      <div className="w-full max-w-md bg-spotify-gray h-12 rounded-full hover:bg-zinc-600 focus-within:bg-zinc-600 hover:scale-105 focus-within:scale-105 transition-transform duration-200 flex items-center p-3 text-zinc-400">
        <label htmlFor="search-input" className="cursor-pointer">
          <IconeLupa />
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="O que você quer ouvir?"
          className="w-full bg-transparent border-none outline-none font-bold ml-2 text-white placeholder-zinc-400 text-sm truncate"
        />
      </div>
    </div>
  );
};

export default BarraPesquisa;
