
export const Proyecto = ({info})=>{
    return(
        <div>
            <h2>{info.nombre}</h2>
            <h2>{info.id}</h2>
            <img src={info.pictureUrl} alt="hola" />
            

        </div>
    )
}