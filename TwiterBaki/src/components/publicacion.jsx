export function Publicacion(props){
    /*
    variables necesarias
    FOTO
    NOMBRE
    USUARIO
    HORAS
    MENSAJES
    */

    /*
    ICONOS NECESARIOS
    comentarios
    retwit
    like
    vistas
    */
    
    const{foto,nombre,usuario,horas,contenido}=props
    return(
          <div className="publicacion cuadros" >
             <div style={{ width: '13%' }}>
          <img style={{ borderRadius: '100%', height: '43%', width: '100%',marginTop:'1rem' ,marginLeft:'1rem'}} src={foto} alt="" />
        </div>
            <div className='publicacion_columna' style={{marginLeft:'1rem'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <p><span><strong>{nombre}</strong></span></p>
                    <p>{contenido}</p>
                    <p>{horas}</p>
                    <div className="opcionespublicacion">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
</svg>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
</svg>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
</svg>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>
                        </div>

                    </div>
                </div>
                <div>@{usuario}</div>
                
            </div>
          </div>
    )
}