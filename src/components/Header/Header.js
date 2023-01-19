import { Link } from "react-router-dom";

const Header = ({ isAutenticated, username }) => {
	let guestNavigation = (
		<div id="guest">
			<Link className="button" to="/login">
				Login
			</Link>
			<Link className="button" to="/register">
				Register
			</Link>
		</div>
	);

	let userNavigation = (
		<div id="user">
			<span>Welcome, email</span>
			<Link className="button" to="/my-pets">
				My Pets
			</Link>
			<Link className="button" to="/create">
				Add Pet
			</Link>
			<Link className="button" to="#">
				Logout
			</Link>
		</div>
	);

	return (
		<header id="site-header">
			<nav className="navbar">
				<section className="navbar-dashboard">
					<Link to="/">Dashboard</Link>
					{isAutenticated
						? userNavigation
						: guestNavigation
					}
				</section>
			</nav>
		</header>
	);
};

export default Header;