
import React from 'react';
import { getSheetData } from '../lib/sheets';

const Acoes: React.FC = async () => {
  const data = await getSheetData('Acoes!A2:D'); // Example range

  return (
    <section id="proximas-acoes">
      <div className="container">
        <h2>Próximas Ações</h2>
        <div className="acoes-grid">
          {data && data.length > 0 ? (
            data.map((row, index) => (
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
              <div className="acao-date">Sábado, 04 de Outubro</div>
              <div className="acao-time">⏰ 23h00</div>
              <div className="acao-location">📍 Praça Armênia</div>
              <div className="acao-details">
                <strong>Ponto de Encontro:</strong> Igreja do Lauzane às 22h00<br />
                <strong>Atividades:</strong> Distribuição de refeições, oração e evangelização
              </div>
            </div>
          )}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: 'var(--light-blue)', borderRadius: '10px' }}>
          <p><strong>📱 Mantenha-se atualizado!</strong> Entre em nosso grupo do WhatsApp para receber informações sobre novas ações e mudanças de horário.</p>
        </div>
      </div>
    </section>
  );
};

export default Acoes;
