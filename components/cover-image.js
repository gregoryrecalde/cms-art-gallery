import ContentfulImage from './contentful-image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug, alignment }) {
  const image = (
    <ContentfulImage
      width={300}
      height={200}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  const containerStyle = {
    float: alignment === 'right' ? 'right' : 'left', // Cambiar 'right' a 'left' según sea necesario
  };

  return (
    <div className="sm:mx-0"  style={containerStyle}>
      {image}
    </div>
  )
}
