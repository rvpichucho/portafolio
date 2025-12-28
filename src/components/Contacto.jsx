import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import '../styles/contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    
    // Simular envío
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      
      setTimeout(() => setEnviado(false), 3000);
    }, 1500);
  };

  return (
    <section id="Contacto">
      <div className="section-container">
        <h2 className="section-title">Contáctame</h2>
        <p className="contacto-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contacto-content">
          <div className="contacto-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>romelpichucho@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h4>Teléfono</h4>
                <p>+593 99 123 4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Ubicación</h4>
                <p>Quito, Ecuador</p>
              </div>
            </div>
          </div>
          
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${enviando ? 'enviando' : ''} ${enviado ? 'enviado' : ''}`}
              disabled={enviando}
            >
              {enviando ? (
                'Enviando...'
              ) : enviado ? (
                '¡Mensaje Enviado!'
              ) : (
                <>
                  <FaPaperPlane /> Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
