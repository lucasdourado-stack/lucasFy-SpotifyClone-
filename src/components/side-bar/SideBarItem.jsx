const SideBarItem = ({ link, label, icone: Icone }) => {
  return (
    <div>
        <a href={link} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
         {Icone && <Icone />}
         {label}
        </a>
    </div>
  )
}

export default SideBarItem
