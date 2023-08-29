import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ResponsiveVideo from '../components/responsive-video'
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Link from 'next/link';

import { photos } from "../assets/photos";

function handleResize() {
  // Actualiza el diseño de la página en respuesta a cambios de tamaño de la ventana
  // Puedes poner aquí cualquier lógica de actualización que necesites
}
export default function Index({ preview, allPosts }) {

  const formattedData = allPosts.map(post => ({
    src: post.coverImage.url,
    width: post.coverImage.width,
    height: post.coverImage.height,
    title: post.title, // Puedes agregar más información si lo deseas
  }));

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  const videoUrl = 'https://richardmacdonald.com/wp-content/uploads/2022/12/RM-Intro-042822-mp4.mp4'; // Reemplaza con la URL de tu video

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    setTimeout(() => {
      const newCursorColor = 'white';
      document.documentElement.style.setProperty('--cursor-color', newCursorColor);
    }, 300);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    const newCursorColor = 'black';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  };

  

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <ResponsiveVideo videoUrl={videoUrl}/>
        <Container>
          <Intro />
<div>

<ul className='button-container'>
          <li className="p-2 block relative left-button">
            <Link href="/allegories" passHref>
            <h3 className="shawn-secondary-text-color main-option font-semibold   mb-4 text-4xl lg:text-6xl">
              Allegories</h3>
            </Link>
          </li>
          <hr/>
          <li className="p-2 block relative right-button">
            <Link href="/drawings" passHref>
            <h3 className="shawn-secondary-text-color main-option font-semibold   mb-4 text-4xl lg:text-6xl" >
              Drawings</h3>
            </Link>
          </li>
        </ul>
</div>

          <div>
          <Gallery photos={formattedData} photosize={100} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={formattedData.map(item  => ({
                    src: item.src,
                      width: item.width,
                      height: item.height,
                      caption: item.title,
              }))}
              styles={{
                // Estilo del contenedor principal del Carousel
                container: (base) => ({
                  ...base,
                  textAlignLast: 'center',
                  textAlign: '-webkit-center',
                }),
                
                // Estilo de la vista individual
                view: (base) => ({
                  ...base,
                  textAlignLast: 'center',
                  textAlign: '-webkit-center'
                }),
                
                // Estilo del pie de página de la vista (opcional)
                footer: (base) => ({
                  ...base,
                  textAlignLast: 'center',
                  textAlign: '-webkit-center'
                })}}
            />
          </Modal>
        ) : null}
      </ModalGateway>
          </div>
{/* 
          {allPosts.map((post, index) => {
            // Calcular el valor de coverAlignment en función del índice
            const coverAlignment = index % 2 === 0 ? 'right' : 'left';

            return (
              <HeroPost
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                content={post.content}
                coverAlignment={coverAlignment}
              />
            );
          })} */}
          
          
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
