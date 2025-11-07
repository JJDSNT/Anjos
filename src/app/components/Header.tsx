import React from 'react';
import { getSheetConfig } from '../lib/sheets';

const Header: React.FC = async () => {
  const config = await getSheetConfig();

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
