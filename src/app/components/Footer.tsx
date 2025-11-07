'use client';

import React, { useState, useEffect } from 'react';
import { getSheetConfig } from '../lib/sheets';

const Footer: React.FC = () => {
  const [config, setConfig] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchConfig = async () => {
      const newConfig = await getSheetConfig();
      setConfig(newConfig);
    };
    fetchConfig();
  }, []);

  return (
    <footer id="contato">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>📧 Contato</h4>
            <p>Email: {config.email || ''}</p>
            <p>WhatsApp: <a href={config.whatsapp_link || ''}>{config.whatsapp || ''}</a></p>
          </div>
          <div className="footer-section">
            <h4>📍 Igreja Base</h4>
            <p>{config.igreja_nome || ''}</p>
            <p>{config.igreja_endereco || ''}</p>
            <p>{config.igreja_cidade_estado || ''}</p>
          </div>
          <div className="footer-section">
            <h4>🕐 Encontros</h4>
            <p>{config.encontro_dia_hora || ''}</p>
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
