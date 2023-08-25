import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  content,
  coverAlignment
}) {
  const isLeftAlignment = coverAlignment === 'left';
  const [ref, inView] = useInView({
    triggerOnce: true, // Activa la animación una vez cuando el elemento entra en el campo de visión
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      x: isLeftAlignment ? '-100%' : '100%', // Inicialmente, desplázalo fuera de la pantalla
    },
    visible: {
      opacity: 1,
      x: '0%', // Luego, anima hacia la posición final (0%)
      transition: {
        duration: 0.5, // Duración de la animación en segundos
        delay: 0.5,
      },
    },
  };

  const contentAlignmentClass = coverAlignment === 'left' ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <motion.div
        className="md:w-1/1"
        style={{ marginBottom: '100px' }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} // Activar la animación cuando el elemento es visible
        variants={animationVariants}
        ref={ref}
      >
    <section>
      <div className={`md:flex ${contentAlignmentClass}`}>
        <div className="md:w-1/2">
          <h3 className="shawn-secondary-text-color  mb-4 text-4xl lg:text-6xl leading-tight">
            {title}
          </h3>
          <div className={markdownStyles['markdown']}>
            {documentToReactComponents(
              content.json,
              customMarkdownOptions(content)
            )}
          </div>
          <p className="shawn-secondary-text-color text-lg leading-relaxed mb-4">{excerpt}</p>
          <IoIosArrowDown className="mr-1 shawn-secondary-text-color " style={{ fontSize: '64px' }} />
        </div>
        <div className="md:w-1/2">
          <CoverImage title={title} slug={slug} url={coverImage.url} alignment={coverAlignment}/>
        </div>
      </div>
    </section>
        </motion.div>

  )
}
