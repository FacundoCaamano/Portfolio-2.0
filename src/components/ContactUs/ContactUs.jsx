import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_ityxf5k","template_8hmvq1p" , e.target, "FxsY6Mi7n6sti1PHk")
    .then(
      Swal.fire(
        'Su correo fue enviado!',
        `respondere lo mas pronto posible a la direccion ${e.target[2].value}`,
        'success'
        )
        )
        e.target.reset()
      };
      
  return (
    <form className='formulario animate__animated animate__bounceInUp' onSubmit={sendEmail}>
      <ul className='formulario__lista'>
        <li className='formulario__lista--item'>
          <label>Name</label>
          <input type="text" name="user_name" required/>
        </li>
        <li className='formulario__lista--item'>
          <label>Asunto</label>
          <input type="text" name="asunto" required/>
        </li>
        <li className='formulario__lista--item'>
          <label>Email</label>
          <input type="email" name="user_email" required/>
        </li>
        <li className='formulario__lista--item'>
          <label>Mensaje</label>
          <textarea name="message" required/>
        </li>
        <li className='formulario__lista--item'>
          <input type="submit" value="Enviar" />
        </li>
      </ul>
    </form>
  );
};

