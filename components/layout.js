import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import FloatingMenu from '../components/floatingmenu'
import dynamic from 'next/dynamic';
import { width } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { transform } from 'framer-motion';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false, // Evita la renderización en el lado del servidor
});

export default function Layout({ preview, children, cursorInnerSize, cursorOuterSize,  usePrimaryColorValue}) {
  return (
    <>
    
    <AnimatedCursor
      innerSize={cursorInnerSize}
      outerSize={cursorOuterSize}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        zIndex: 10000,
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)',
        zIndex: 9999,
        zIndex: 10000,
      }}
    />
      <Meta />
      <div className="min-h-screen" style={{display: 'inline-grid', overflowX: 'hidden'}}>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
        <FloatingMenu   usePrimaryColor={usePrimaryColorValue}/>
      </div>
      <Footer />
    </>
  )
}
