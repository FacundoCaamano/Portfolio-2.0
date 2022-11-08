
import { Proyecto } from "../Proyecto/Proyecto";

export const ProyectosList =({data=[]})=>{
    return(
        <div className="lista--proyectos">
            {   
                data.map(proyecto=> <Proyecto key={proyecto.id} info={proyecto}/>)
            }
        </div>
        
    )
}