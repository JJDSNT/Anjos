
import React from 'react';

const Local: React.FC = () => {
  return (
    <section id="local">
      <div className="container">
        <h2>Local das Ações</h2>
        <div className="fade-in-up">
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-light)' }}>
            Os pontos de ação variam conforme a necessidade e planejamento. Consulte sempre as informações da próxima ação acima.
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4623657832767!2d-46.67851698502201!3d-23.480089284695247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8a7c!2sLauzane%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1635789123456!5m2!1spt!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Lauzane Paulista"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Local;
