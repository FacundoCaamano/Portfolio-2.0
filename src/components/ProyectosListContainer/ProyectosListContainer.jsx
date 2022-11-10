import { ProyectosList } from "../ProyectosList/ProyectosLIst"
import { useEffect, useState } from "react"
import { proyectos } from "../baseDeDatos/baseDeDatos";

export const ProyectosListContainer =()=>{

    const [data , setData]=useState([]);

    useEffect(()=>{
        const getData =new Promise(resolve => {
            setTimeout(()=>{
                resolve(proyectos)
            },)
        })

        getData.then(res=>setData (res))

    },[])

    return(
        <div className="contenedor__proyectosLista"> 
            <h1 className="contenedor__proyectosLista--titulo">Mis proyectos</h1>
           <ProyectosList data={data}/>
        </div>
    )
}