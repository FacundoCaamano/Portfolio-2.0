import desarrolloweb from '../../assets/img/desarrolloweb.png'
import javascript from '../../assets/img/javascript.png'
import Reactjs from '../../assets/img/Reactjs.png'


export const InicioContainer=()=>{
    return(
        <div className='contenedor__inicio'>
            <h1 className='contenedor__inicio--titulo'>Mi portafolio</h1>
            <p className='contenedor__inicio--sobreMi'>
                hola mi nombre es Facundo Caamaño y soy desarrollador Frontend ectualmente estoy estudiando en coder house  cursando la carrera de full stack, me apasiona mucho el mundo de la programacion y la idea de aprender nuevas tecnologias para crear paginas web 
            </p>

            <div className='certificados'>
                <h2>certificados</h2>
                    <img src={desarrolloweb}  className="certificados--img" alt='cert'/>
                    <img src={javascript} className="certificados--img" alt='cert'/>
                    <img src={Reactjs} className="certificados--img" alt="cert" />
            </div>
            <div className='contenedor__perfil'>
               <div className='contenedor__perfil--iconos'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin" className='contenedor__perfil--iconos-E'/> linkedin
               </div>
               <div className='contenedor__perfil--iconos'>
                    <img src='https://cdn-icons-png.flaticon.com/512/3135/3135731.png' alt='cv' className='contenedor__perfil--iconos-E'/> cv
               </div>    
            </div>
            <div className='skills'>
                <h2 className='skiils__titulo'>Skills</h2>
                <div className='skills__img'>
                    <div className='skills__img--1'>
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png'  alt='1' />
                        <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png'  alt='1' />
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' alt='1' />
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png'  alt='1' />
                    </div>
                    <div className='skills__img--2'>
                        <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'   alt='1' />
                        <img src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png'  alt='1' />
                        <img src='https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png'  alt='1' />
                        <img src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' alt='1' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}