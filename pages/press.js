import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Link from 'next/link';
import ResponsiveVideo from '../components/responsive-video'
import IntroNoVideo from '../components/intro-no-video'
import { height } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { render } from "react-dom";
import { useEffect} from "react";

export default function Press() {
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
          <title>{`${CMS_NAME} - Press`}</title>
        </Head>
        <div style={containerStyle}>
        </div>
        <Container>
          <IntroNoVideo />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 mb-24">
            <div className="md:col-span-2 flex" style={{alignSelf: 'center'}}>
            <img src="/press.png" height={'fit-content'} />
            </div>
            {/* Columna Derecha - Título y Párrafo */}
            <div className="md:col-span-1" >
              
              <div className=" inset-0 flex right-0">
                

          <div className="bg-transparent p-4 mb-8 rounded-lg">
            
          <div className="md:flex justify-center pb-6" >
              <h2 className="text-2xl font-bold ">About the Artist</h2>
          </div>
            <ul className="space-y-2 text-lg">
              <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2020</h1>
              <li className="p-2 block">
                <a
                  href="https://chicago.suntimes.com/movies-and-tv/2020/11/13/21558934/oprah-winfrey-west-loop-shawn-michael-warren-chicago-murals"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  Chicago Sun Times
                </a>
              </li>
              <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2019</h1>
              <li className="p-2 block">
                <a
                  href="https://www.theartblog.org/2019/08/narrative-paintings-accentuate-los-angeless-complicated-history-at-craig-krull-gallery/"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  ArtBlog
                </a>
              </li>
              <li className="p-2 block">
                <a
                  href="https://www.nytimes.com/2019/07/08/arts/design/maya-angelou-murals-los-angeles.html"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  The New York Times
                </a>
              </li>
              <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2018</h1>
              <li className="p-2 block">
                <a
                  href="https://hyperallergic.com/447480/swizz-beatz-art-grants-winners/"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  Hyperallergic
                </a>
              </li>
              <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2017</h1>
              <li className="p-2 block">
                <a
                  href="https://www.nytimes.com/2017/09/27/arts/design/artprize-michigan-betsy-devos-donald-trump.html"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  The New York Times
                </a>
              </li>
              <li className="p-2 block">
                <a
                  href="https://www.fox17online.com/2017/09/27/artprize-interview-troubled-waters"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  FOX17 Grand Rapids
                </a>
              </li><h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2016</h1>
              <li className="p-2 block">
                <a
                  href="https://www.ocweekly.com/laguna-college-of-art-and-designs-students-impress-7317285/"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  OC Weekly
                </a>
              </li>
              <h1 className="text-1xl md:text-1xl font-bold tracking-tighter leading-tight md:pr-8">2015</h1>
              <li className="p-2 block">
                <a
                  href="https://www.theroot.com/17-brilliant-black-artists-featured-at-art-basel-in-mia-1790862030"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  The Root
                </a>
              </li>
              <li className="p-2 block">
                <a
                  href="https://www.therapidian.org/promised-land-illuminating-moments-artprize"
                  target="_blank"
                  className="shawn-secondary-text-color"
                >
                  The Rapidian
                </a>
              </li>
            </ul>
          </div>
        </div>
            </div>
          </div>


        
          
        </Container>
      </Layout>
    </>
  )
}