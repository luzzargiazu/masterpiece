import React from 'react';
import '../../estilos/estilos del ejemplo/TestimoniosEJ.css';
import avatar1 from '../../imagenes/imagenes del ejemplo/avatarEJ1.webp'; 
import avatar2 from '../../imagenes/imagenes del ejemplo/avatarEJ2.png'; 
import avatar3 from '../../imagenes/imagenes del ejemplo/avatarEJ3.png'; 
import avatar4 from '../../imagenes/imagenes del ejemplo/avatarEJ4.png'; 

function TestimoniosEJ() {
  return (
    <div className="testimonios-section">
      <h2>Testimonios de Clientes</h2>
      <div className="testimonios-grid">
        <div className="testimonio-card">
          <p className="testimonio-text">"El servicio técnico y venta de iPhones ha sido excelente. Desde el momento en que entré en la tienda, me sentí atendida y valorada. El personal fue muy profesional y resolvió mi problema rápidamente. Además, la selección de iPhones es impresionante y a precios competitivos. ¡Definitivamente volveré y lo recomendaré a mis amigos y familiares!"</p>
          <div className="cliente-info">
            <img src={avatar1} alt="Cliente Avatar" className="cliente-avatar" />
            <div className="cliente-detalles">
              <p className="cliente-nombre">Lautaro Acosta</p>
              <div className="cliente-rating">
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonio-card">
          <p className="testimonio-text">"Tuve una experiencia muy buena con el servicio técnico y la compra de mi nuevo iPhone. El personal fue amable y eficiente, y mi teléfono fue reparado en poco tiempo. Lo único que podría mejorar es la comunicación, ya que tuve que llamar varias veces para obtener actualizaciones sobre mi reparación. A pesar de eso, estoy muy satisfecho con el resultado final."</p>
          <div className="cliente-info">
            <img src={avatar2} alt="Cliente Avatar" className="cliente-avatar" />
            <div className="cliente-detalles">
              <p className="cliente-nombre">Agustin Arborio</p>
              <div className="cliente-rating">
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonio-card">
          <p className="testimonio-text">"El servicio técnico de esta tienda es increíble. Mi iPhone estaba teniendo problemas serios y pensé que tendría que comprar uno nuevo, pero el equipo aquí lo arregló perfectamente. Además, aproveché para comprar un iPhone nuevo para mi esposa y el proceso fue rápido y sin problemas. La atención al cliente es de primera categoría. ¡Muy recomendado!"</p>
          <div className="cliente-info">
            <img src={avatar3} alt="Cliente Avatar" className="cliente-avatar" />
            <div className="cliente-detalles">
              <p className="cliente-nombre">Omar Falcao</p>
              <div className="cliente-rating">
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonio-card">
          <p className="testimonio-text">"Lamentablemente, mi experiencia no fue la mejor. Aunque la tienda tiene una buena selección de iPhones, el servicio técnico dejó mucho que desear. La reparación de mi teléfono tardó más de lo prometido y la comunicación fue deficiente. Aprecio el esfuerzo, pero creo que hay mucho que mejorar en términos de eficiencia y atención al cliente."</p>
          <div className="cliente-info">
            <img src={avatar4} alt="Cliente Avatar" className="cliente-avatar" />
            <div className="cliente-detalles">
              <p className="cliente-nombre">Maximo Diambra</p>
              <div className="cliente-rating">
                <span className="estrella">★</span>
                <span className="estrella">★</span>
                <span className="estrella">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimoniosEJ;