
import React from 'react';

const Sobre: React.FC = () => {
  return (
    <section id="sobre">
      <div className="container">
        <h2>Sobre Nós</h2>
        <div className="sobre-content fade-in-up">
          <p>Os <strong>Anjos da Madrugada</strong> são um grupo de voluntários cristãos dedicados a levar esperança, amor e dignidade para pessoas em situação de vulnerabilidade social em São Paulo.</p>
          <p>Nossa missão vai além de apenas oferecer uma refeição quente. Procuramos criar conexões humanas genuínas, compartilhar a Palavra de Deus com amor e respeito, e demonstrar que cada pessoa tem valor incalculável aos olhos do Senhor.</p>
          <p>Acreditamos que pequenos gestos de amor podem transformar vidas e que, juntos, podemos fazer a diferença na vida de quem mais precisa.</p>
        </div>
        <div className="valores-grid">
          <div className="valor-item fade-in-up">
            <div className="valor-icon">❤️</div>
            <h4>Amor ao Próximo</h4>
            <p>Servimos com compaixão e respeito, vendo Cristo em cada pessoa.</p>
          </div>
          <div className="valor-item fade-in-up">
            <div className="valor-icon">🤝</div>
            <h4>Solidariedade</h4>
            <p>Unidos na fé, trabalhamos juntos para ajudar quem mais precisa.</p>
          </div>
          <div className="valor-item fade-in-up">
            <div className="valor-icon">🙏</div>
            <h4>Fé em Ação</h4>
            <p>Colocamos nossa fé em prática através do serviço e da evangelização.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
