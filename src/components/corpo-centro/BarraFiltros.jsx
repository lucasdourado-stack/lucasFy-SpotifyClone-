import ButtonWhite from "../button/ButtonWhite"
import ButtonGray from "../button/ButtonGray"

const BarraFiltros = () => {
  return (
    <div>
      <div className="flex gap-2 items-center text-sm font-semibold ">
     
       <ButtonWhite label='Tudo'/>

     
        <ButtonGray label='Músicas'/>
       
        <ButtonGray label='Podcast'/>
       
      </div>
    </div>
  )
}

export default BarraFiltros