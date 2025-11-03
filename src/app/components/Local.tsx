import React from 'react';
import { getSheetData } from '../lib/sheets';

const Local: React.FC = async () => {
  const data = await getSheetData('Acoes');
  const nextAction = data && data.length > 1 ? data[1] : null;
  const address = nextAction ? nextAction[2] : 'Lauzane Paulista, São Paulo - SP';

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="local">
      <div className="container">
        <h2>Local da Próxima Ação</h2>
        <div className="fade-in-up">
          <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-light)' }}>
            {nextAction ? `A próxima ação será em: ${address}` : 'Consulte as informações da próxima ação acima.'}
          </p>
          <div className="map-container">
            <iframe
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização - ${address}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Local;
