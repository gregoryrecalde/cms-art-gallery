import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllAllegoriesForHome, getAllegories } from '../lib/allegories-api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ResponsiveVideo from '../components/responsive-video'
import IntroNoVideo from '../components/intro-no-video'
import { render } from "react-dom";
import { useEffect} from "react";

export default function Allegories({ preview, allAllegories }) {
  const heroPost = allAllegories[0]
  const morePosts = allAllegories.slice(1)
  const videoUrl = '/banner.mp4'; // Reemplaza con la URL de tu video
  const containerStyle = {
    marginTop: '8rem', // Ajusta el valor del margen superior según tu preferencia
  };  

  useEffect(() => {
    const newCursorColor = '#101e51';
    document.documentElement.style.setProperty('--cursor-color', newCursorColor);
  }, []);

  return (
    <>
    <Layout cursorInnerSize={8} cursorOuterSize={35} usePrimaryColorValue={false}>
        <Head>
          <title>{`${CMS_NAME} - Allegories`}</title>
        </Head>
        <div style={containerStyle}>
        </div>
        <Container>
          <IntroNoVideo />
          {allAllegories.map((post, index) => {
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
          })}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allAllegories = (await getAllAllegoriesForHome(preview)) ?? []
  return {
    props: { preview, allAllegories },
  }
}
