import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllAllegoriesForHome, getAllegories } from '../lib/allegories-api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ResponsiveVideo from '../components/responsive-video'


export default function Allegories({ preview, allAllegories }) {
  const heroPost = allAllegories[0]
  const morePosts = allAllegories.slice(1)
  const videoUrl = 'https://richardmacdonald.com/wp-content/uploads/2022/12/RM-Intro-042822-mp4.mp4'; // Reemplaza con la URL de tu video

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`${CMS_NAME} - Allegories`}</title>
        </Head>
        <ResponsiveVideo videoUrl={videoUrl}/>
        <Container>
          <Intro />
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