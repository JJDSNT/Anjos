import React from 'react';
import { getSheetData } from '../lib/sheets';
import LocalClient from './LocalClient';

const Local: React.FC = async () => {
  const initialData = await getSheetData('Acoes');

  return (
    <section id="local">
      <div className="container">
        <h2>Local da Próxima Ação</h2>
        <LocalClient initialData={initialData} />
      </div>
    </section>
  );
};

export default Local;