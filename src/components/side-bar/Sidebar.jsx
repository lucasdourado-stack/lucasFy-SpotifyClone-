import SideBarItem from "./SideBarItem";
import { menuItems } from "../../data/mockData";
import { Link } from "react-router-dom";
import { useState } from "react";

import iconShow from "../../assets/IconShow.png";
import iconHover from "../../assets/IconHover.png";
import iconHide from "../../assets/IconHide.png";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  function Expand() {
    setIsExpanded(!isExpanded);
  }

  const getIcon = () => {
    if (!isExpanded) return iconShow;
    if (isHovered) return iconHover;
    return iconHide;
  };

  const showButton = !isExpanded || isHovered;

  return (
    <div className="bg-spotify-dark p-6 flex flex-col gap-6 rounded-lg font-bold min-w-0 overflow-y-auto">
      <div
        className="flex flex-row items-center cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
          onClick={Expand}
          className={`shrink-0 transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer
            ${
              showButton
                ? "w-6 opacity-100 mr-5 scale-100"
                : "w-0 max-w-0 overflow-hidden opacity-0 mr-0 scale-75 pointer-events-none"
            }`}>
          <img
            src={getIcon()}
            alt={isExpanded ? "Recolher biblioteca" : "Expandir biblioteca"}
            className="w-6 h-6 shrink-0 object-contain"
            draggable={false}
          />
        </button>

        {isExpanded && (
          <h1 className="transition-all duration-300 ease-in-out text-slate-200 whitespace-nowrap">
            Sua Biblioteca
          </h1>
        )}
      </div>

      {isExpanded && (
        <aside className="w-72">
          <nav className="flex flex-col gap-5">
            <div className="cursor-pointer flex flex-col gap-5 w-full">
              {menuItems.map((menu) => (
                <Link key={menu.id} to={menu.link} className="block">
                  <SideBarItem
                    label={menu.label}
                    icone={menu.icone}
                    link={menu.link}
                  />
                </Link>
              ))}
            </div>
          </nav>
          <div className="w-full h-px bg-zinc-800 my-4"></div>

          <SideBarItem placeholder="Sua Biblioteca" />
        </aside>
      )}
    </div>
  );
}

export default Sidebar;
