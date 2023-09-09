import './styles.css'
import { GeneradorDeBotones } from './generadorBotones'
import { Tarjeta } from './tarjetasUsuario'
import DerianFoto from '../img/DerianFoto.png'
export function BarraLateral() {
    return (
        <div className='marco scroll-bar'>
            <aside className='asideM'>
                
                <GeneradorDeBotones></GeneradorDeBotones>
                <div className='botonEnlace' style={{ width: '100%', height: '3rem' }}>
                    <a href="" className='decorador'>
                        <p>
                            <strong>
                                Post
                            </strong>
                        </p>
                    </a>                 
                          <Tarjeta nombre="Derian Molina Lopez" usuario="DerianML" foto={DerianFoto}  ></Tarjeta>

                    </div>
                
            </aside>
        </div>
    )
} 