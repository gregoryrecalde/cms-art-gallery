import Container from '../components/container'
import IntroNoVideo from '../components/intro-no-video'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { render } from "react-dom";
import { useEffect, useState} from "react";

export default function Contact() {
  const containerStyle = {
    marginTop: '8rem', // Ajusta el valor del margen superior según tu preferencia
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // Aquí puedes enviar los datos del formulario a través de una solicitud HTTP (por ejemplo, mediante Axios o fetch).
    // También puedes agregar validación de datos antes de enviar la solicitud.
  };

  const showMessage = (e) => {
    const messageContainer = document.querySelector('.message-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    setTimeout(function () {
        messageContainer.style.display = 'block';
        messageContainer.style.animation = 'fadeInUp 0.5s ease-in-out, slideOutUp 0.5s 2.5s ease-in-out';
        confirmationMessage.style.animation = 'fadeInUp 0.5s ease-in-out, slideOutUp 0.5s 2.5s ease-in-out';
        setTimeout(function () {
            confirmationMessage.style.animation = '';
            messageContainer.style.animation = '';
            messageContainer.style.display = 'none';
        }, 3000); // El mensaje se ocultará después de 3 segundos
    }, 100); // Pequeño retraso para permitir que se muestre la animación
  };

  
  useEffect(() => {



    const newCursorColor = '#101e51';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  }, []);
  
  return (
    <>
    <Layout cursorInnerSize={8} cursorOuterSize={35} usePrimaryColorValue={false}>
        <Head>
          <title>{`${CMS_NAME} - About`}</title>
        </Head>
        <div style={containerStyle}>
        </div>
        <Container>
          <IntroNoVideo />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 mb-24 ">
             
          {/* Columna 1 */}
            <div className="md:col-span-2 flex" style={{alignSelf: 'center'}}>
              <img src="/contact.jpg" height={'fit-content'} />
              </div>
              {/* Columna Derecha - Título y Párrafo */}
              <div className="md:col-span-1" >
            <div className=" inset-0 flex right-0  justify-center">
                

          {/* Columna 2 */}
          <div className="bg-transparent p-4 mb-8 rounded-lg" >
            
            
            <div>
              
            <div className="md:flex justify-center pb-6"  >
                <h2 className="text-2xl font-bold ">Contact</h2>
            </div>
              <form className="custom-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject">Subject:</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" onClick={showMessage}>Send</button>
              </form>
              
                
              <div class="message-container">
                    <p id="confirmation-message">Thank you.</p>
                </div>
            </div>


          </div>
          </div>
          </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}