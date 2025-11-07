'use client';

import React, { useState, useEffect } from 'react';
import { getSheetData } from '../lib/sheets';

const LocalClient: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getSheetData('Acoes');
      setData(newData);
    };
    fetchData();
  }, []);

  const nextAction = data && data.length > 1 ? data[1] : null;
  const address = nextAction ? nextAction[2] : 'Lauzane Paulista, São Paulo - SP';
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
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
  );
};

export default LocalClient;
