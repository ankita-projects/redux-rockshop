import React from "react";

const Footer = () => {
	const today = new Date();

	return (
		<footer className ="footer">
			<p>
				Made by <a href='https://github.com/ankita-projects'>Ankita</a>. Copyright{" "}
				{today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;