import desarrolloweb from '../../assets/img/desarrolloweb.png'
import javascript from '../../assets/img/javascript.png'
import Reactjs from '../../assets/img/Reactjs.png'
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
                        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin" /> linkedin
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
                    <img src={Reactjs} className="certificados" alt="cert" />
            </div>
            <div>
                <h2>Skills</h2>
                <img src='https://cdn-icons-png.flaticon.com/512/732/732212.png' />
                <img src='https://cdn-icons-png.flaticon.com/512/732/732190.png' />
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png'/>
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' />
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'  />
                <img src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png' />
                <img src='https://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png' />
                <img src='https://cdn-icons-png.flaticon.com/512/2504/2504911.png'/>
            </div>
        </div>
    )
}