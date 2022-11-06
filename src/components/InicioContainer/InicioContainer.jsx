import desarrolloweb from '../../assets/img/desarrolloweb.png'
import javascript from '../../assets/img/javascript.png'
import './InicioContainer.css'

export const InicioContainer=()=>{
    return(
        <div>
            <p>inicio</p>
            <h1>Mi portafolio</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex non corporis at exercitationem modi tempore adipisci cupiditate tempora. Sint magnam minima consequuntur incidunt eligendi voluptate quidem necessitatibus suscipit harum.
            </div>
            <div>
                <ul>
                    <li>
                        linkedin
                    </li>
                    <li>
                        cvu
                    </li>
                </ul>
                
            </div>
            <div>
                certificados
                    <img src={desarrolloweb}  className="certificados" alt='cert'/>
                    <img src={javascript} className="certificados" alt='cert'/>
            </div>
            <div>
                <h2>Skills</h2>
            </div>
        </div>
    )
}