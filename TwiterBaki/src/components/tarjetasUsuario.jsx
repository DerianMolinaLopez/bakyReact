export function Tarjeta(props) {
    const { usuario, nombre, foto , mostrarBoton} = props;

    return (
        <div>
            <a href="" className="enlace-sin-decoracion">
                <div className="exterior-tarjeta">
                    <div className="imagen-tarjeta">
                        <picture>
                            <img src={foto} alt="Usuario" className="imagen-tarjeta-dimensionar" />
                        </picture>
                    </div>
                    <div className="usuario-cuenta">
                        <p className="textoUsuario"><strong>{nombre}</strong></p>
                        <p className="textoUsuario">@{usuario}</p>
                    </div>
                    {mostrarBoton && (
                        <div className="seguir">
                            <button>Seguir</button>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}
