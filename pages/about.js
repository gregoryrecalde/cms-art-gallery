import Container from '../components/container'
import IntroNoVideo from '../components/intro-no-video'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link';
import Gallery from "react-photo-gallery";
import { height } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { render } from "react-dom";
import { useEffect} from "react";

export default function About() {
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
          <title>{`${CMS_NAME} - About`}</title>
        </Head>
        <div style={containerStyle}>
        </div>
        <Container>
          <IntroNoVideo />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 mb-24">
            <div className="md:col-span-1">
            <img src="/about.png" style={{maxHeight:'max-content'}} alt="Logo" />
            </div>
            {/* Columna Derecha - Título y Párrafo */}
            <div className="md:col-span-1" >
              <h2 className="text-2xl font-bold mb-4">About the Artist</h2>
              <p className="text-gray-700" style={{textSlign: "justify;"}}>
              Shawn Michael Warren was born in Chicago, IL. He received his BFA at the American Academy of Art in Chicago and also studied at the Florence Academy of Art in Florence, Italy. His work brings attention and awareness to events and individuals (past and present) that have affected and shaped cultures and civilizations throughout the world. His emphasis on narrative, historical subjects is a central feature of his larger viewpoint, which looks at the History of the United States, and the world, via the experiences of BIPOC. Warren often utilizes historic themes or narratives to communicate essential human truths, and initiate uncomfortable conversations surrounding race, sociopolitical subjects, and culture. He seeks to portray people with a grand humanity, rather than simply indicating a figure in a landscape.<br></br>
              <br></br>
His most notable creation, In a Promised Land . . . , received critical acclaim for bringing life to the tragic history of the Greenwood Community in early 1920s Tulsa, Oklahoma, home to the wealthiest black community in America: “The sublime beauty of Warren’s painting style combined with the absence of blood and gore makes the subject matter accessible, so that people linger and look closely at the scene of destruction and emotional upheaval” (Kate Lewis, in the Rapidian).<br></br><br></br>
Through narrative painting, Warren depicts these subjects in a way that captures the attention of the viewer and triggers empathy as well as the need to learn and fully understand the story behind its imagery.
              </p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}