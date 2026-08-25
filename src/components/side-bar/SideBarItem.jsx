

const SideBarItem = ({link, placeholder}) => {
  return (
    <div>
        <a href={link} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
          <div className="w-6 h-6 bg-zinc-300 rounded-sm"></div> {placeholder}
        </a>
    </div>
  )
}

export default SideBarItem
