import { BarraLateral, BarraLateralDerecha } from "./aside"
export function Union(){
    return(
      <div className="union">
        <BarraLateral/>
        <div>
          <h1>contenido principal</h1>
        </div>
        <BarraLateralDerecha/>
      </div>
      
    )
}