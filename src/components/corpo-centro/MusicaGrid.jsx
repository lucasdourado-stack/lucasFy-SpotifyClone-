// Adicionamos o "children" para receber qualquer card diretamente por fora
const MusicaGrid = ({ title, children }) => {
  return (
    <div className="">
   
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>

      <div className="flex flex-wrap gap-6">
        {children} 
      </div>
    </div>
  )
}

export default MusicaGrid
