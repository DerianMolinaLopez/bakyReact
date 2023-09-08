import './styles.css'
import { GeneradorDeBotones } from './generadorBotones'
 export function BarraLateral(){
    return(
        <div className='marco'>
            <aside className='asideM'>
                <GeneradorDeBotones></GeneradorDeBotones>
            </aside>
        </div>
    )
} 