// import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h1 className="header-logo">Minimal E-commerce</h1>

			<nav className="header__nav">
				<ul className="nav">
					<Link className="nav__link" to="/">
						Home
					</Link>
					<Link className="nav__link" to="/benefits">
						Benefits
					</Link>
					<Link className="nav__link" to="/products">
						Products
					</Link>
					<Link className="nav__link" to="/faqs">
						FAQs
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
