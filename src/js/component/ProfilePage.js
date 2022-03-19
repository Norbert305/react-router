import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProfilePage = () => {
	let navigate = useNavigate();

	let { username } = useParams();

	return (
		<div className="text-center">
			<h1>This is the profile Page for {username} !</h1>
			<button
				className="btn btn-primary"
				onClick={() => {
					navigate("/about");
				}}>
				Go to About Us Page
			</button>
		</div>
	);
};
