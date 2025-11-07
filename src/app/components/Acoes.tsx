import React from 'react';
import AcoesClient from './AcoesClient';

const Acoes: React.FC = () => {
  return (
    <section id="proximas-acoes">
      <div className="container">
        <h2>Próximas Ações</h2>
        <AcoesClient />
        <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: 'var(--light-blue)', borderRadius: '10px' }}>
          <p><strong>📱 Mantenha-se atualizado!</strong> Entre em nosso grupo do WhatsApp para receber informações sobre novas ações e mudanças de horário.</p>
        </div>
      </div>
    </section>
  );
};

export default Acoes;