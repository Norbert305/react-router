import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutUs = () => {
	let navigate = useNavigate();

	return (
		<div className="text-center">
			<h1>Welcome!</h1>
			<br />
			<p>About us!</p>
			<button
				className="btn btn-primary"
				onClick={() => {
					navigate("/");
				}}>
				Back to Landing Page
			</button>
		</div>
	);
};
