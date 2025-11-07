'use client';

import React, { useState, useEffect } from 'react';
import { getSheetData } from '../lib/sheets';

const AcoesClient: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);

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

export default AcoesClient;
