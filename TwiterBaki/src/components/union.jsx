import { BarraLateral} from "./aside"
import { BarraLateralDerecha } from "./generadorBotones"
import { Principal } from "./principal"
export function Union(){
    return(
      <div className="esquemaPrincipal" >
        <BarraLateral/>
        <Principal></Principal>
         <BarraLateralDerecha> </BarraLateralDerecha>
      </div>
      
    )
}