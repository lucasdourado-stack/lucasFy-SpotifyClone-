import { useRef, useState, useEffect, useCallback } from "react";
import { Musicas } from "../../data/mockData";
import MusicaCard from "./MusicaCard";

const MusicaGrid = ({ title, setCurrentSong }) => {
  const carrosselRef = useRef(null);
  const [podeEsquerda, setPodeEsquerda] = useState(false);
  const [podeDireita, setPodeDireita] = useState(false);

  const atualizarSetas = useCallback(() => {
    const el = carrosselRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setPodeEsquerda(scrollLeft > 1);
    setPodeDireita(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    atualizarSetas();

    const el = carrosselRef.current;
    if (!el) return;

    const observer = new ResizeObserver(atualizarSetas);
    observer.observe(el);

    return () => observer.disconnect();
  }, [atualizarSetas]);

  const navegar = (direcao) => {
    if (!carrosselRef.current) return;

    carrosselRef.current.scrollBy({
      left: direcao === "esquerda" ? -600 : 600,
      behavior: "smooth",
    });
  };

  const fade = 80;
  const lado1 = podeEsquerda ? `transparent 0, black ${fade}px` : "black 0";
  const lado2 = podeDireita
    ? `black calc(100% - ${fade}px), transparent 100%`
    : "black 100%";

  const mascara = `linear-gradient(to right, ${lado1}, ${lado2})`;

  const estiloSeta =
    "absolute top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 hover:scale-105 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-2xl border border-neutral-800 transition-all duration-200 opacity-0 group-hover/carrossel:opacity-100";

  return (
    <div className="p-4 select-none w-full">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      <div className="relative group/carrossel">
        {podeEsquerda && (
          <button
            onClick={() => navegar("esquerda")}
            className={`${estiloSeta} left-2`}>
            &#10094;
          </button>
        )}

        {podeDireita && (
          <button
            onClick={() => navegar("direita")}
            className={`${estiloSeta} right-2`}>
            &#10095;
          </button>
        )}

        <div
          ref={carrosselRef}
          onScroll={atualizarSetas}
          style={{ maskImage: mascara, WebkitMaskImage: mascara }}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 relative z-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Musicas.map((musica) => (
            <div key={musica.id} className="shrink-0 w-[180px]">
              <MusicaCard
                name={musica.name}
                artist={musica.artist}
                cover={musica.cover}
                musica={musica}
                onClick={() => setCurrentSong(musica)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicaGrid;
