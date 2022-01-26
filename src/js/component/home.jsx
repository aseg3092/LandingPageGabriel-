import React from "react";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-between align-items-center">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="container">
				<Footer />
			</div>
		</>
	);
};

export default Home;
