import { Link } from 'react-router-dom'
import desarrolloweb from '../../assets/img/desarrolloweb.png'
import javascript from '../../assets/img/javascript.png'
import Reactjs from '../../assets/img/Reactjs.png'


export const InicioContainer = () => {
    return (
        <div className='contenedor__inicio'>
            <h1 className='contenedor__inicio--titulo'>Mi portafolio</h1>
            <p className='contenedor__inicio--sobreMi '>
                hola mi nombre es Facundo Caamaño y soy desarrollador Frontend ectualmente estoy estudiando en coder house  cursando la carrera de full stack, me apasiona mucho el mundo de la programacion y la idea de aprender nuevas tecnologias para crear paginas web
            </p>
            <div className='contenedor__perfil ' data-aos="fade-left" data-aos-duration="2000">
                <div className='contenedor__perfil--iconos animate__animated animate__pulse animate__infinite infinite animate__slower	2s'>
                    <Link to='./Proyectos'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3518/3518229.png' alt='proyectos' className='contenedor__perfil--iconos-E'/>
                        Mis proyectos
                    </Link>
                </div>
                <div className='contenedor__perfil--iconos animate__animated animate__pulse animate__infinite infinite animate__slower	2s'>
                    <a  href="https://www.linkedin.com/in/facundo-caama%C3%B1o-6a581324b/" target="blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/1409/1409945.png" alt="linkedin" className='contenedor__perfil--iconos-E' />
                        Link a mi perfil de linkedin
                    </a>
                </div>
                <div className='contenedor__perfil--iconos animate__animated animate__pulse animate__infinite infinite animate__slower	2s'>
                    <a  href="https://github.com/FacundoCaamano?tab=repositories" target="blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/527/527589.png" alt="linkedin" className='contenedor__perfil--iconos-E' />
                        Link a mi repositorio en Github
                    </a>
                </div>
                <div className='contenedor__perfil--iconos animate__animated animate__pulse animate__infinite infinite animate__slower	2s'>
                    <a download='' href=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/909/909212.png' alt='cv' className='contenedor__perfil--iconos-E' />
                        <spam>descargar cv</spam>
                    </a>
                </div>
            </div>
            <div className='certificados'>
                <h2>certificados</h2>
                <img src={desarrolloweb} className="certificados--img" alt='cert' data-aos="flip-left" data-aos-duration="2000" />
                <img src={javascript} className="certificados--img" alt='cert' data-aos="flip-right" data-aos-duration="2000" />
                <img src={Reactjs} className="certificados--img" alt="cert" data-aos="flip-left" data-aos-duration="2000" />
            </div>
            <div className='skills'>
                <h2 className='skills__titulo'>Skills</h2>
                <div className='skills__img'>
                    <div className='skills__img--1'>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt='html' />
                            <tool-tip role='tooltip'> <b> HTML</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='CSS' />
                            <tool-tip role='tooltip'> <b>CSS</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' alt='SASS' />
                            <tool-tip role='tooltip'> <b> SASS</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' alt='Bootstrap' />
                            <tool-tip role='tooltip'> <b> BOOTSTRAP</b> </tool-tip>
                        </picture>
                    </div>
                    <div className='skills__img--2'>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='JAVASCRIPT' />
                            <tool-tip role='tooltip'> <b>JAVASCRIPT</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png' alt='REACT JS' />
                            <tool-tip role='tooltip'> <b>REACT JS</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://img.icons8.com/color/512/git.png' alt='GIT' />
                            <tool-tip role='tooltip'> <b>GIT</b> </tool-tip>
                        </picture>
                        <picture>
                            <img src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png' alt='GITHUB' />
                            <tool-tip role='tooltip'> <b>GITHUB</b> </tool-tip>
                        </picture>
                    </div>
                </div>
            </div>
            
        </div>
    )
}