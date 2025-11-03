
import React from 'react';

const Contato: React.FC = () => {
  return (
    <section id="contato" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nosso Instagram</h2>
        {/* Widget do Instagram será inserido aqui */}
        <p className="text-center">Siga-nos no Instagram para ver mais fotos e atualizações.</p>
        <div className="instagram-widget-container"> 
          {/* O código do widget do Instagram vai aqui */}
        </div>
      </div>
    </section>
  );
};

export default Contato;
