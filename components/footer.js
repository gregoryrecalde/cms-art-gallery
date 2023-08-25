import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="shawn-secondary-text-color text-sm lg:text-sm font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Copyright ® 2023 | Shawn Michael Warren
          </h3>
          <div className="flex flex-col lg:flex-row lg:justify-end  justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href=""
              className="rounded-full mx-3 shawn-footer-button border font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
            <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </a>
            <a
              href=""
              className="rounded-full mx-3 shawn-footer-button border font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
            </a>
            <a
              href=""
              className="rounded-full mx-3 shawn-footer-button border font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
            <FontAwesomeIcon icon={faInstagram} size="1x" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
