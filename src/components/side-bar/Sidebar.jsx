import SideBarItem from "./SideBarItem";
import { menuItems } from "../../data/mockData";
import { Link } from "react-router-dom";
import { useState } from "react";
import abrir from "../../assets/abrir.png";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  function Expand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className=" bg-spotify-dark p-6  flex md:flex flex-col gap-6 rounded-lg transform">
      <button onClick={Expand} className="cursor-pointer ">
        <img src={abrir} className="w-5 h-5" />
      </button>

      {isExpanded && (
        <aside className="w-76">
          <nav className="flex flex-col gap-5">
            <div className="cursor-pointer flex flex-col gap-5 w-min">
              {menuItems.map((menu) => (
                <Link key={menu.id} to={menu.link}>
                  <SideBarItem
                    label={menu.label}
                    icone={menu.icone}
                    link={menu.link}
                  />
                </Link>
              ))}
            </div>
          </nav>
          <div className="w-full h-px bg-zinc-800"></div>

          <SideBarItem placeholder="Sua Biblioteca" />
        </aside>
      )}
    </div>
  );
}

export default Sidebar;
