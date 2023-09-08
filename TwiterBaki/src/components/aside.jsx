import './styles.css'
export function BarraLateral() {
    return (
        <div>
            <aside>
                <div className="aside">
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                             <p><strong>Home</strong></p>
                        </a>
                    </div>
                    <div className='botonApariencia'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>
                        <a href="" className="boton">
                            Explore
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Notifications
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Messages
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Lists
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Comunities
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Verified
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            Profile
                        </a>
                    </div>
                    <div className='botonApariencia'>
                        <a href="" className="boton">
                            More
                        </a>
                    </div>

                 



                </div>

            </aside>
        </div>
    )
}
export function BarraLateralDerecha() {
    return (
        <div>
            <aside>
                <div className="contenedorComponentes">
                    <div className="contenedorComponentes__busqueda">
                        <input type="text" name="" id="" />
                    </div>

                </div>
            </aside>
        </div>
    )
}