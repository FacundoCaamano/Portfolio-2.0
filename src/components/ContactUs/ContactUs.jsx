
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ityxf5k', 'template_8hmvq1p', e.target, 'FxsY6Mi7n6sti1PHk')
      .then((result) => {
        alert('mensaje enviado', result.text);
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <form className='formulario animate__animated animate__bounceInUp' onSubmit={sendEmail}>
      <ul className='formulario__lista'>
        <li className='formulario__lista--item'>
          <label>Name</label>
          <input type="text" name="user_name" />
        </li>
        <li className='formulario__lista--item'>
          <label>Asunto</label>
          <input type="text" name="asunto" />
        </li>
        <li className='formulario__lista--item'>
          <label>Email</label>
          <input type="email" name="user_email" />
        </li>
        <li className='formulario__lista--item'>
          <label>Mensaje</label>
          <textarea name="message" />
        </li>
        <li className='formulario__lista--item'>
          <input type="submit" value="Enviar" />
        </li>
      </ul>
    </form>
  );
};

