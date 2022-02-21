import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Bootstrap
				</a>
				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarNav">
					<ul className="nav ">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link ">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
