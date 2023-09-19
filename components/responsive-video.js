export default function ResponsiveVideo  ({ videoUrl })  {
  return (
    <div>
      {/* Utilizamos un div contenedor con padding-bottom para establecer la relación de aspecto del video */}
      
      <video autoPlay  muted  autoplay="autoplay"  loop style={{ width: '100vw', marginBottom: '100px'}}>
        <source src={videoUrl}   type="video/mp4" />
        </video>
    </div>
  )
}