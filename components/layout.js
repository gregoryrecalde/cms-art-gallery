import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import FloatingMenu from '../components/floatingmenu'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen" style={{display: 'inline-grid'}}>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
        <FloatingMenu /> {/* Agrega el menú flotante */}
      </div>
      <Footer />
    </>
  )
}
