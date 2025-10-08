
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contato">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>📧 Contato</h4>
            <p>Email: anjosdamadrugada@lauzane.com.br</p>
            <p>WhatsApp: <a href="https://wa.me/5511999999999">(11) 99999-9999</a></p>
          </div>
          <div className="footer-section">
            <h4>📍 Igreja Base</h4>
            <p>Igreja do Lauzane</p>
            <p>Rua Exemplo, 123 - Lauzane Paulista</p>
            <p>São Paulo - SP</p>
          </div>
          <div className="footer-section">
            <h4>🕐 Encontros</h4>
            <p>Sábados - 22h00</p>
            <p>Ponto de encontro na igreja</p>
            <p>Saída para ação: 23h00</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anjos da Madrugada - Lauzane. Todos os direitos reservados.</p>
          <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
            "Porque tive fome e me destes de comer; tive sede e me destes de beber..." - Mateus 25:35
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
