'use client';

import React, { useState, useEffect } from 'react';
import { getSheetConfig } from '../lib/sheets';

const Header: React.FC = () => {
  const [config, setConfig] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchConfig = async () => {
      const newConfig = await getSheetConfig();
      setConfig(newConfig);
    };
    fetchConfig();
  }, []);

  return (
    <header>
      <div className="container">
        <h1>{config.igreja_nome || 'Anjos da Madrugada'}</h1>
        <p>Levando amor, cuidado e a Palavra de Deus para quem precisa</p>
        <div className="subtitle-highlight">Lauzane - São Paulo</div>
      </div>
    </header>
  );
};

export default Header;
