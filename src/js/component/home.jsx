import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { ErrorPage } from "./ErrorPage";
import { Landing } from "./Landing";
import { ProfilePage } from "./ProfilePage";

const Home = () => {
	return (
		<Router>
			<nav className="bar">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/profile">Profile</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/profile/:username" element={<ProfilePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
};

export default Home;
