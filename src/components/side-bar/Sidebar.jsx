import SideBarItem from "./SideBarItem";
import { menuItems } from "../../data/mockData";

function Sidebar(){
  return (
    <aside className="w-72 bg-spotify-dark p-6 hidden md:flex flex-col gap-6 rounded-lg">
      <nav className="flex flex-col gap-5">
        <div className="cursor-pointer flex flex-col gap-5 w-min">
        {menuItems.map(menu => (
          <SideBarItem
            key={menu.id}       
            label={menu.label}  
            icone={menu.icone}   
            link={menu.link}
          />                    
        ))}
        </div>
      </nav>

      <div className="w-full h-px bg-zinc-800"></div>

      <nav>
        <SideBarItem link="" placeholder='Sua Biblioteca'/>
      </nav>
    </aside>
  );
}

export default Sidebar;
