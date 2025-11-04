import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Acoes from './components/Acoes';
import Sobre from './components/Sobre';
import Local from './components/Local';
import Contribuir from './components/Contribuir';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anjos da Madrugada – Lauzane | Ação Social",
  description: "Ação social que leva amor, cuidado e a Palavra de Deus para pessoas em situação de vulnerabilidade no Lauzane, São Paulo.",
};

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Sobre />
        <Acoes />
        <Local />
        <Contribuir />
        <Instagram />
      </main>
      <Footer />
    </>
  );
};

export default Home;