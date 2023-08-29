import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FloatingMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textColor, setTextColor] = useState('shawn-primary-text-color');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    const newCursorColor = isModalOpen ? 'black' : 'white';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  };

  useEffect(() => {
    function handleScroll() {
      // Obtén el ancho de la ventana del navegador
      const windowWidth = window.innerWidth;

      // Determina una altura de desplazamiento diferente según la pantalla
      const scrollThreshold = windowWidth <= 768 ? 180 : 900;

      // Cambia el color del texto a negro cuando el usuario ha desplazado una cierta cantidad
      if (window.scrollY > scrollThreshold) {
        setTextColor('shawn-secondary-text-color ');
      } else {
        setTextColor('shawn-primary-text-color');
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
    <div className={`fixed top-0 right-4 bg-transparent p-3 rounded-lg z-50`}>
      <button
        onClick={toggleModal}
        className={`${textColor} hover:text-white transition-colors duration-300 text-1xl`}
      >
        ☰
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg">
          <div className="bg-transparent p-4 rounded-lg">
            <button
                onClick={toggleModal}
                className="absolute top-2 right-2 shawn-primary-text-color text-6xl hover:text-white transition-colors duration-300"
                >
                x
            </button>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter  shawn-primary-text-color leading-tight mb-20 mt-8 relative">
  WarrenArt
  <span className="absolute left-0  bottom-0 w-full h-1 bg-gradient-to-r from-blue-950 via-white-500 to-white opacity-0 transition-opacity"></span>
  <style jsx>{`
    h2:hover span {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  `}</style>
</h2>
            <ul className="space-y-2 text-lg">
              <li className="p-2 block">
                <Link href="/" passHref>
                  <div className="shawn-primary-text-color">Home</div>
                  
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 via-white-500  to-white opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
              <li className="p-2 block">
                <Link href="/allegories" passHref>
                  <div className="shawn-primary-text-color">Allegories</div>
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-950 via-white-500 to-white  opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
              <li className="p-2 block">
                <Link href="/drawings" passHref>
                  <div className="shawn-primary-text-color">Drawings</div>
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 via-white-500 to-white opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
              <li className="p-2 block">
                <Link href="/press" passHref>
                  <div className="shawn-primary-text-color">Press</div>
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 via-white-500  to-white opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
              <li className="p-2 block">
                <Link href="/about" passHref>
                  <div className="shawn-primary-text-color">About</div>
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-950 via-white-500 to-white opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
              <li className="p-2 block">
                <Link href="/contact" passHref>
                  <div className="shawn-primary-text-color">Contact</div>
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 via-white-500 to-white opacity-0 transition-opacity"></span>
                <style jsx>{`
                    li:hover span {
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                    }
                `}</style>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
