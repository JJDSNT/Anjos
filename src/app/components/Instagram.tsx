import React from 'react';
import { getSheetConfig } from '../lib/sheets';

const Instagram: React.FC = async () => {
  const config = await getSheetConfig();

  if (!config.instagram_url) {
    return null;
  }

  return (
    <section id="instagram" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nosso Instagram</h2>
        <p className="text-center">
          Siga-nos no Instagram para ver mais fotos e atualizações: {' '}
          <a href={config.instagram_url} target="_blank" rel="noopener noreferrer">
            @{config.instagram_user || 'anjosdamadrugada.lauzane'}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Instagram;
