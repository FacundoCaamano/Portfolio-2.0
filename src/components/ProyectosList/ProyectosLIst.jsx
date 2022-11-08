
import { Proyecto } from "../Proyecto/Proyecto";

export const ProyectosList =({data=[]})=>{
    return(
        
        data.map(proyecto=> <Proyecto key={proyecto.id} info={proyecto}/>)
        
    )
}