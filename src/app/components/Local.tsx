import React from 'react';
import LocalClient from './LocalClient';

const Local: React.FC = () => {
  return (
    <section id="local">
      <div className="container">
        <h2>Local da Próxima Ação</h2>
        <LocalClient />
      </div>
    </section>
  );
};

export default Local;