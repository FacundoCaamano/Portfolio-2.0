import { ProyectosList } from "../ProyectosList/ProyectosLIst"
import { useEffect, useState } from "react"
import { proyectos } from "../baseDeDatos/baseDeDatos";
import { Spinner } from "../Spinner/Spinner";

export const ProyectosListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(proyectos)
            },)
        })

        getData.then(res => setData(res))

    }, [])

    let [spinn, setSpinn] = useState(true)


    setTimeout(() => {
        setSpinn(false)
    }, 1000)


    if (spinn === true) return <Spinner />


    return (


        <>
            <div className="contenedor__proyectosLista">
                <hr />
                <div className="contenedor__proyectosLista--titulo">
                    <h1 >Mis proyectos</h1>
                </div>
                <div className="contenedor__proyectosLista--txt">
                    <p >Estos son los proyectos que voy creando , puedes hacer click en la imagen que se encuentran en cada tarjeta para ir a la pagina</p>
                </div>
                <hr />
                <ProyectosList data={data} />
            </div>
            <hr />
        </>


    )
}