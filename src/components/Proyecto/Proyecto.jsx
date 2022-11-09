
export const Proyecto = ({info})=>{
    return(
        <div className="proyectos">
            <div className="contenedor__proyectos">
                <a href={info.link} >
                    <img src={info.pictureUrl} alt="proyecto" className="contenedor__proyectos--img"/>
                </a>
                <div className="contenedor__proyectos--info">
                    <p className="contenedor__proyectos--titulo">{info.nombre}</p>
                    <p>{info.herramientas}</p>
                    <p>Link repositorio</p>
                    <p className="contenedor__proyectos--repositorios">{info.repositorio}</p>
                 </div>
            </div>
        </div>
    )
}