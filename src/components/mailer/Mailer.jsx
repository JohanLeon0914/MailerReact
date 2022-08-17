import emailjs from '@emailjs/browser'

export const Mailer = () => {

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_yydk9mm',
        'template_6nxh1xz',
        event.target,
        'mY6I5remDMwh5Txgh')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div className='div-form'>
        <h1 className='title-form'>Contact Us</h1>
        <form className='form-mail' onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name='user_name' />
          <hr />
  
          <label>Email</label>
          <input type="email" name='user_email' />
          <hr />

          <label>Numero de telefono</label>
          <input type="text" name='user_telefono' />
          <hr />

          <label>Direccion</label>
          <input type="text" name='user_direccion' />
          <hr />

          <label>Punto de encuentro</label>
          <input type="text" name='user_encuentro' />
          <hr />

          <label>Metodo de pago preferido</label>
          <input type="text" name='user_pago' />
          <hr />
  
          <label>¿Para que deseas este servicio?</label>
          <textarea name="user_message" id="" cols="30" rows="10"></textarea>
          <hr />
          <button>Send</button>
        </form>
      </div>
    )
}