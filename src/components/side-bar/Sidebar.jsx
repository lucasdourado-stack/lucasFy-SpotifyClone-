
import SideBarItem from "./SideBarItem";


function Sidebar(){
  return (
    <aside className="w-72  bg-spotify-dark p-6 hidden md:flex flex-col gap-6 rounded-lg">
      <nav className="flex flex-col gap-5">
        
        
         <SideBarItem link="" placeholder='Início'/>
         
         <SideBarItem link="" placeholder='Buscar'/>

      </nav>

      <div className="w-full h-px bg-zinc-800"></div>

      <nav>
        
        <SideBarItem link="" placeholder='Sua Biblioteca'/>
      
      </nav>
    </aside>
  );
}

export default Sidebar;