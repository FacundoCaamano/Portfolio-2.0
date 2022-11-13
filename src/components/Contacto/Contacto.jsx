export const Contacto = () => {
    return (
        <div>
            <section>
                <h1 className="titulo__contacto">Contactame</h1>
                <form class="formulario" action="https://formsubmit.co/facundoadriancaamano@gmail.com" method="POST">
                    <ul class="formulario__lista">
                        <li class="formulario__lista--item">
                            <label for="Nombre">Nombre:</label>
                            <input type="text" name="name" placeholder="Escriba su nombre" required />
                        </li>
                        <li class="formulario__lista--item">
                            <label for="email">E-mail:</label>
                            <input type="email" name="email"  placeholder="Escriba su e-mail" required />
                        </li>
                        <li class="formulario__lista--item">
                            <label for="subject">Asunto</label>
                            <input type="text" name="subject"  placeholder="Asunto" required />
                        </li>
                        <li class="formulario__lista--item">
                            <label for="comments">Comentario</label>
                            <textarea name="comments" cols="30" rows="10"></textarea>
                        </li>
                        <li class="formulario__lista--item">
                            <input className="formulario__lista--item-btn" type="submit" value="Enviar" />
                            <input className="formulario__lista--item-btn" type="reset" value="Limpiar formulario" />
                        </li>
                    </ul>
                    <input type='hidden' name='_next' value='https://portfolio-2-0-mu.vercel.app/Contacto' />
                    <input type='hidden' name='_captcha' value='false' />
                </form>
            </section>
        </div>
    )
}