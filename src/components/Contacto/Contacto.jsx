import { ContactUs } from "../ContactUs/ContactUs"


export const Contacto = () => {
    return (
        <div>
            <section>
                
                <h1 className="titulo__contacto">Contactame</h1>
                
                <ContactUs/>
                <hr />
                <p className="contactoParrafo">Puedes completar el formulario y me llegara a mi correo o puedes mandar un correo a mi direccion</p>
                <hr />
                <span className="contactoCorreo">facundoadriancaamano@gmail.com</span>
            </section>
        </div>
    )
}