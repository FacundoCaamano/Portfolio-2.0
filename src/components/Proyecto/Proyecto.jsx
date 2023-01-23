
export const Proyecto = ({info})=>{
    return(
        <div className="proyectos">
            <div className="contenedor__proyectos" data-aos="zoom-in">
                <a href={info.link}>
                    <img src={info.pictureUrl} alt="proyecto" className="contenedor__proyectos--img"/>
                </a>
                <div className="contenedor__proyectos--info">
                    <p className="contenedor__proyectos--titulo">{info.nombre}</p>
                    <p className="contenedor__proyectos--herramientas">{info.herramientas}</p>
                    <a className="contenedor__proyectos--repositorios animate__animated animate__pulse animate__infinite	infinite" href={info.repositorio} target='_blank' rel="noreferrer" >Link repositorio</a>
                    
                 </div>
            </div>
        </div>
    )
}