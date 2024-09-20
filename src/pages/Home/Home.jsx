import React from 'react';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import Benefits from '../../components/Benefits/Benefits';
import How_It_Works from '../../components/How_It_Works/How_It_Works';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Bienvenido a <span>Minimal E-commerce</span></h1>
        <p>La tienda perfecta para tus necesidades.</p>
      </header>
      <main className="home-main">
        <p>Explora nuestros productos y disfruta de una experiencia de compra simple y eficiente.</p>
      </main>
      <Benefits/>
      <How_It_Works/>
      <Footer />
    </div>
  );
};

export default Home;
