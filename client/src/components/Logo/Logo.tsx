import React from "react";
import Orbit from "../../assets/logo.png";

interface LogoProps {
	size?: string;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
	return (
		<img
			src={Orbit}
			alt="Orbit"
			className="rounded logo"
			style={size ? { height: size, width: size } : {}}
		/>
	);
};
export default Logo;
