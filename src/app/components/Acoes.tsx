'use client';

import React, { useState, useEffect } from 'react';
import { getSheetData } from '../lib/sheets';

const AcoesClient: React.FC<{ initialData: string[][] }> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getSheetData('Acoes');
      setData(newData);
    };
    fetchData();
  }, []);

  return (
    <div className="acoes-grid">
      {data && data.length > 1 ? (
        data.slice(1).map((row, index) => (
          <div className="acao-card fade-in-up" key={index}>
            <div className="acao-date">{row[0]}</div>
            <div className="acao-time">⏰ {row[1]}</div>
            <div className="acao-location">📍 {row[2]}</div>
            <div className="acao-details">
              <strong>Ponto de Encontro:</strong> {row[3]}<br />
              <strong>Atividades:</strong> {row[4]}
            </div>
          </div>
        ))
      ) : (
        <div className="acao-card fade-in-up">
          <p>Nenhuma ação agendada no momento. Fique de olho para mais informações!</p>
        </div>
      )}
    </div>
  );
};

const Acoes: React.FC = async () => {
  const initialData = await getSheetData('Acoes');

  return (
    <section id="proximas-acoes">
      <div className="container">
        <h2>Próximas Ações</h2>
        <AcoesClient initialData={initialData} />
        <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: 'var(--light-blue)', borderRadius: '10px' }}>
          <p><strong>📱 Mantenha-se atualizado!</strong> Entre em nosso grupo do WhatsApp para receber informações sobre novas ações e mudanças de horário.</p>
        </div>
      </div>
    </section>
  );
};

export default Acoes;
