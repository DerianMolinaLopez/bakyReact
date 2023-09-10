import React, { useState } from 'react';
export function Principal(){
    return(
      <div className="contenedorPrincipal">
        <main>
          <Encabezado>
           
          </Encabezado>
          

        </main>
         
      </div>
      
    )
}
function cambioSeleccion(){

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

