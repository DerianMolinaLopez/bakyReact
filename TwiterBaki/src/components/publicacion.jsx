
/*import Cbum from '../img/cbum.jpg'*/
import  Baki from '../img/baki.jpg'
import  Doryan from '../img/doryan.jpg'
import  Doyle from '../img/Hector Doyle.jpg'
import  Jack from '../img/jack.jpg'
export function Publicacion(props) {
  const { foto, nombre, usuario, horas, contenido } = props
  return (
    <div className="contenedor_publicacion">
      <article style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div className="contenedorPublicacion_interior">
          <div style={{ marginRight: '1rem', width: '5rem' }}>
            <img src={foto} alt="" className="imagen_publicaion" />
          </div>
          <div className="contenedor_contenido">
            <div className="texto_contenido">
              <p><span><strong>{nombre}</strong></span></p>
              <p><span>{usuario}</span></p>
              <p style={{ color: '#353535' }}><span>{horas}</span></p>
            </div>
            <div className="contenido_fuente">
              <p>
                {contenido}
              </p>
            </div>
            <ContenedorIconos></ContenedorIconos>
          </div>
        </div>
      </article>

    </div>
  )
}
function ContenedorIconos() {
  return (
    <div className="contenedor_iconos">
      <div className="colorIconoComentario">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          </svg>
        </a>
      </div>
      <div className="colorIconoComentario">
        <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-repeat-once" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
  <path d="M11 11l1 -1v4" />
</svg>
        </a>
      </div>
      <div className="colorIconoComentario">
        <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8 6" />
  <path d="M14 16h6" />
  <path d="M17 13v6" />
</svg>
        </a>
      </div>
      <div className="colorIconoComentario">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          </svg>
        </a>
      </div>

    </div>
  )
}
export function generarPublicaciones(){
  const publicacionesData = [
    {
      foto: Baki,
      nombre: "Nombre 1",
      usuario: "@usuario1",
      horas: "Hace 2 horas",
      contenido: "Contenido de la publicación 1",
    },
    {
      foto: Doryan,
      nombre: "Nombre 2",
      usuario: "@usuario2",
      horas: "Hace 3 horas",
      contenido: "Contenido de la publicación 2",
    },{
      foto: Jack,
      nombre: "Nombre 2",
      usuario: "@usuario2",
      horas: "Hace 3 horas",
      contenido: "Contenido de la publicación 2",
    },{
      foto: Doyle,
      nombre: "Nombre 2",
      usuario: "@usuario2",
      horas: "Hace 3 horas",
      contenido: "Contenido de la publicación 2",
    }
    // Agrega más objetos de datos de publicaciones según sea necesario
  ];
  return publicacionesData.map((publicacion, index) => (
    <Publicacion
      key={index} // Asegúrate de proporcionar una clave única para cada publicación
      foto={publicacion.foto}
      nombre={publicacion.nombre}
      usuario={publicacion.usuario}
      horas={publicacion.horas}
      contenido={publicacion.contenido}
    />
  ));
  
}