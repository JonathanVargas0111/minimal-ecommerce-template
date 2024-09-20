// import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Benefits from "../../components/Benefits/Benefits";
import Header from "../../components/Header/Header";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<header className="home-header">
				<h1>Bienvenido a Minimal E-commerce</h1>
				<p>La tienda perfecta para tus necesidades.</p>
			</header>
			<main className="home-main">
				<p>
					Explora nuestros productos y disfruta de una experiencia de compra
					simple y eficiente.
				</p>
			</main>
			<Benefits />
			<Footer />
		</div>
	);
};

export default Home;
