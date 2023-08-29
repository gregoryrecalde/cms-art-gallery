import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import FloatingMenu from '../components/floatingmenu'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false, // Evita la renderización en el lado del servidor
});

export default function Layout({ preview, children }) {
  return (
    <>
    
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        zIndex: 9999
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)',
        zIndex: 9999,
      }}
    />
      <Meta />
      <div className="min-h-screen" style={{display: 'inline-grid', overflowX: 'hidden'}}>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
        <FloatingMenu />
      </div>
      <Footer />
    </>
  )
}
