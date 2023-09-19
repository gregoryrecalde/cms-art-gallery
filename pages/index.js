import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ResponsiveVideo from '../components/responsive-video'
import React, { useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Link from 'next/link';
import Lightbox from '../components/lightbox'; // Asegúrate de que la ruta del import sea correcta


function handleResize() {
  // Actualiza el diseño de la página en respuesta a cambios de tamaño de la ventana
  // Puedes poner aquí cualquier lógica de actualización que necesites
}

export default function Index({ preview, allPosts }) {

  const formattedData = allPosts.map((post, index) => ({
    src: post.coverImage.url,
    width: post.coverImage.width,
    height: post.coverImage.height,
    title: post.title,
    index: index,
  }));

  
  useEffect(() => {
    const newCursorColor = '#101e51';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  }, []);

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const videoUrl = '/banner.mp4'; // Reemplaza con la URL de tu video

  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setLightboxVisible(true);
    console.log('clickando');
    const newCursorColor = 'white';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  }, []);

  const closeLightbox = () => {
    const newCursorColor = '#101e51';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
    setLightboxVisible(false);
  };
  
  const renderImage = ({ photo }) => {
    return (
      <div className="gallery-image" onClick={(e) => openLightbox(e, photo)}>
        <img {...photo} alt={photo.title}  />
        <h3  style={{alignSelf:'center'}} className="shawn-secondary-text-color text-sm lg:text-sm font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">{photo.title}</h3>
      </div>
    );
  };
  

  return (
    <>
      <Layout preview={preview} cursorInnerSize={8} cursorOuterSize={35} usePrimaryColorValue={true}>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <ResponsiveVideo  videoUrl={videoUrl}/>
        <Container>
          <Intro />
<div>

<ul className='button-container'>
          <Link href="/allegories" passHref>
            <li className="p-2 block relative left-button">
              
              <h3 className="shawn-secondary-text-color main-option font-semibold   mb-4 text-4xl lg:text-6xl">
                Allegories</h3>
            </li>
          </Link>
          <hr/>
          <Link href="/drawings" passHref>
            <li className="p-2 block relative right-button">
              <h3 className="shawn-secondary-text-color main-option font-semibold   mb-4 text-4xl lg:text-6xl" >
                Drawings</h3>
            </li>
          </Link>
        </ul>
</div>
          
          <div>
            
          
          <Gallery photos={formattedData} renderImage={renderImage} />

          </div>
          {lightboxVisible && (
          <Lightbox
            images={formattedData}
            currentIndex={currentImage}
            onClose={() => closeLightbox()}
          />
        )}
          
        </Container>
      </Layout>
      
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
