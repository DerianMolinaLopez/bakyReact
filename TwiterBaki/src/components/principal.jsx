import React, { useState } from 'react';
import DerianFoto from '../img/DerianFoto.png'
import { Publicacion } from './publicacion';
import { generarPublicaciones } from './publicacion';
import Cbum from '../img/cbum.jpg'
export function Principal() {
  return (
    <div className="contenedorPrincipal">
      <main>
        <Encabezado>

        </Encabezado>
        <Posteo></Posteo>
        <Publicacion foto={Cbum} nombre='CBUMoficial' usuario='cbup'horas='12h' contenido='hola' ></Publicacion>
        <div>
      {generarPublicaciones()}
    </div>
      </main>

    </div>

  )
}
function Opciones(props) {
  const { marcado, texto, onClick } = props;

  const estiloLink = {
    borderBottom: marcado ? '5px solid rgb(29, 155, 240)' : 'none',
    color: 'white',
    textDecoration: 'none', // Para quitar el subrayado por defecto
    borderRadius: '5px',
    cursor: 'pointer', // Agregamos un cursor indicando que es interactivo
  };

  return (
    <div className="centrado" onClick={onClick}>
      <a href="#" className="eliminarDecorador" style={estiloLink}>
        {texto}
      </a>
    </div>
  );
}

function Encabezado() {
  const [opcionActiva, setOpcionActiva] = useState('For you');

  const cambiarOpcion = (nuevaOpcion) => {
    setOpcionActiva(nuevaOpcion);
  };

  return (
    
    <div className="header">
      <h1 style={{ color: 'white', marginLeft: '2rem' }}>Home</h1>
      <div className="opciones">
        <Opciones
          texto="For you"
          marcado={opcionActiva === 'For you'}
          onClick={() => cambiarOpcion('For you')}
        />
        <Opciones
          texto="Following"
          marcado={opcionActiva === 'Following'}
          onClick={() => cambiarOpcion('Following')}
        />
      </div>
    </div>
  );
}
export function Posteo() {
  return (
    <section className='encuadrar'>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '2rem' }}>
        <div style={{ width: '13%' }}>
          <img style={{ borderRadius: '100%', height: '100%', width: '100%' }} src={DerianFoto} alt="" />
        </div>
        <div className='redondeado escritura'>
          <input type="text" placeholder='what is happening?' className='inputPost' />
        </div>
        <div>
          {/* Contenido adicional */}
        </div>
      </div>
      <div className='postIcons'>
        <div className='icons_betwen'>
            <div className='iconoselector'>
            <a href="">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 8h.01" />
                            <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
                            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5" />
                            <path d="M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526" />
                            <path d="M19 22v-6" />
                            <path d="M22 19l-3 -3l-3 3" />
                          </svg>
                        </a>
            </div>
            
            <div className='iconoselector'>
              <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-details" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              </svg>
            </a>
            </div>
            
            <div className='iconoselector'>
              <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 10l.01 0" />
                <path d="M15 10l.01 0" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </a>
            </div>
            
            <div className='iconoselector'>
               <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-due" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </a>
            </div>
           
            <div className='iconoselector'>
              <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </a>
            </div>
            
         
        </div>
        <a href="" className='botonIcon decorador botonEnlace'> Post</a>
      </div>
    </section>
  );
}

/*
<a href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8h.01" />
  <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5" />
  <path d="M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
</svg>
          </a>
          <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-details" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 5h8" />
  <path d="M13 9h5" />
  <path d="M13 15h8" />
  <path d="M13 19h5" />
  <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
  <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
</svg>
          </a>
          <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 10l.01 0" />
  <path d="M15 10l.01 0" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
</svg>
          </a>
<a href="">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-due" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
</a>
<a href="">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
</svg>
</a>
*/ 