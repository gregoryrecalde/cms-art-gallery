import React, { useEffect, useState } from 'react';
import FloatingMenu from '../components/floatingmenu'

export default function Intro() {
  const [textColor, setTextColor] = useState('shawn-primary-text-color');
  const [backgroundColor, setBackgroundColor] = useState('bg-transparent');

  useEffect(() => {
    function handleScroll() {
      // Obtén el ancho de la ventana del navegador
      const windowWidth = window.innerWidth;

      // Determina una altura de desplazamiento diferente según la pantalla
      const scrollThreshold = windowWidth <= 768 ? 180 : 900;

      // Cambia el color del texto a negro cuando el usuario ha desplazado una cierta cantidad
      if (window.scrollY > scrollThreshold) {
        setTextColor('shawn-secondary-text-color');
        
        // Cambia el fondo solo en dispositivos móviles
        if (windowWidth <= 768) {
          setBackgroundColor('shawn-secondary-bg-color');
        }
      } else {
        setTextColor('shawn-primary-text-color');
        setBackgroundColor('bg-transparent');
      }
    }

    // Agregar el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de desplazamiento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`fixed top-0 left-0 right-0 flex-col md:flex-row flex md:justify-between z-50 ${backgroundColor} p-4 ${textColor}`}>
      
      <div className="flex items-center">
        <img src="https://drive.google.com/uc?id=1SkLIClwh9azrq_QloyR1m0CL_CX4z5pJ" className="w-12 h-12 mr-2" alt="Logo" />
        <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">
        </h1>
      </div>
    </section>
  );
}
