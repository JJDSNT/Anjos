
import React from 'react';

const Contribuir: React.FC = () => {
  return (
    <section id="como-contribuir">
      <div className="container">
        <h2>Como Contribuir</h2>
        <div className="contribuir-grid">
          <div className="contribuir-card fade-in-up">
            <div className="contribuir-icon">🥘</div>
            <h3>Doações de Alimentos</h3>
            <p>Ajude-nos a preparar refeições nutritivas para nossos irmãos em necessidade.</p>
            <ul className="contribuir-list">
              <li>🍝 Macarrão (todos os tipos)</li>
              <li>🥕 Legumes frescos</li>
              <li>🍲 Caldos e temperos</li>
              <li>🥤 Copos descartáveis</li>
              <li>🍞 Pães e biscoitos</li>
              <li>☕ Café e açúcar</li>
            </ul>
          </div>
          <div className="contribuir-card fade-in-up">
            <div className="contribuir-icon">💰</div>
            <h3>Doações em Dinheiro</h3>
            <p>Sua contribuição financeira nos ajuda a comprar ingredientes e materiais necessários.</p>
            <div className="pix-key">
              PIX: anjosdamadrugada@lauzane.com.br
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
              ⚠️ <em>Chave PIX fictícia - substitua pela chave real da igreja</em>
            </p>
          </div>
          <div className="contribuir-card fade-in-up">
            <div className="contribuir-icon">🙋‍♀️</div>
            <h3>Voluntariado</h3>
            <p>Junte-se a nós! Precisamos de pessoas dispostas a servir com amor e dedicação.</p>
            <ul className="contribuir-list">
              <li>👨‍🍳 Preparo das refeições</li>
              <li>🚚 Transporte e logística</li>
              <li>💬 Conversa e evangelização</li>
              <li>📱 Divulgação e redes sociais</li>
              <li>🎵 Música e louvor</li>
            </ul>
            <a href="https://wa.me/5511999999999" className="whatsapp-btn" target="_blank">
              📱 Quero ser voluntário
            </a>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: 'var(--gradient)', color: 'var(--white)', borderRadius: '15px' }}>
          <h3 style={{ marginBottom: '15px' }}>✨ Cada Gesto Importa</h3>
          <p style={{ fontSize: '1.1rem' }}>Não importa o tamanho da sua contribuição. O que importa é o amor com que você doa. Deus multiplica o pouco quando oferecido com fé!</p>
        </div>
      </div>
    </section>
  );
};

export default Contribuir;
