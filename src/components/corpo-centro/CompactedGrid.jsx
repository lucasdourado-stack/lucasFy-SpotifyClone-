import CompactedCard from "./CompactedCard";
function CompactedGrid(){
    return(
     <>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mx-4 ">
            <CompactedCard titulo='relax' capa={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBUfn8DM8H56JZ6OkejZ1lvkE8X7TZJ7tF_zNbDu-tQ&s=10'}/>
            <CompactedCard titulo="Rap 90's"  capa={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmcEkMS4_nqGrCwyURkg5gdngU6NzAZj7NapLoH9GEA&s=10"}/>
            <CompactedCard titulo='BoomBap'  capa={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIjSSyBTlTxhyc0_LPqUlVnaqkI__FrSHXhZJr47HSw&s=10'}/>
            <CompactedCard titulo='Trap'  capa={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8X-du2IFkq1PNOa1hcDCa32itjJL3Y-XGsAhyMQl3w&s=10'}/>
            
        </div>
     
     </>
    )
}

export default CompactedGrid