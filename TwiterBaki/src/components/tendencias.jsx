export function What() {
    return (
        <section>
            <div className="redondeoElemento" style={{ marginTop: '1rem' }}>
                <h3 style={{ color: 'White', marginLeft: '1rem' }}><strong>What’s happening</strong></h3>
                <div>
                    <Whatsub encabezado='Noticia' titulo='deforestacion' post='11k'/>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>

    )
}
function Whatsub(props) {
    const { encabezado, titulo, post } = props;
    return (
        <article>
            <a href="" className="enlace-sin-decoracion"> {/* Aplica la clase aquí */}
                <div className="whatssub" style={{marginLeft:'1rem',margin:'0'}}>
                    <div>
                        <p className="eliminarmargen decolorar">{encabezado}</p>
                    </div>
                    <div>
                        <p className="eliminarmargen" style={{marginBottom:'4px'}}><strong><span>{titulo}</span></strong></p>
                    </div>
                    <div>
                        <p className="eliminarmargen decolorar">{post}</p>
                    </div>
                </div>
            </a>
        </article>
    );
}
function GeneradorNoticiasBaki() {
  const noticias = [
    { encabezado: 'Tending in Mexico', titulo: 'Pickle', post: '1m' },
    { encabezado: 'News', titulo: 'Pickle', post: '12k' },
    { encabezado: 'The man', titulo: 'Yujiro Hanma', post: '3k' },
    { encabezado: 'Sports', titulo: 'Kaio Retsu in Box World', post: '1k' },
  ];

  // Mapeamos las noticias y generamos componentes NoticiaBaki para cada una
  const componentesNoticias = noticias.map((noticia, index) => (
    <NoticiaBaki
      key={index}
      encabezado={noticia.encabezado}
      titulo={noticia.titulo}
      post={noticia.post}
    />
  ));

  return (
    <div>
      {componentesNoticias}
    </div>
  );
}
