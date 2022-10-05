import React from 'react';
import styled from 'styled-components';
import { devices } from '../../css/config';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	padding?: string;
	margin?: string;
	color?: string;
	type?: 'submit' | 'button';
	borderRadius?: string;
	disabled?: boolean;
};

const Button = ({
	children,
	onClick,
	padding,
	margin,
	color,
	type,
	borderRadius,
	disabled,
}: ButtonProps) => {
	return (
		<ButtonWrapper
			padding={padding}
			margin={margin}
			color={color}
			borderRadius={borderRadius}
			onClick={onClick}
			type={type ? type : 'button'}
			disabled={disabled ? true : false}
		>
			{children}
		</ButtonWrapper>
	);
};
export default Button;

const ButtonWrapper = styled.button<ButtonProps>`
	cursor: pointer;
	border: ${(props) =>
		props.color ? `2px solid ${props.color}` : '2px solid #fdb796'};
	color: ${(props) => (props.color ? props.color : '#fdb796')};
	background-color: transparent;
	padding: ${(props) => (props.padding ? props.padding : '20px 80px')};
	margin: ${(props) => (props.margin ? props.margin : '5px')};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : '50px'};

	background-image: ${(props) =>
		props.color
			? `linear-gradient(to top, black 50%, #000 50%),linear-gradient(to top, ${props.color} 50%, transparent 50%)`
			: 'linear-gradient(to top, black 50%, #000 50%),linear-gradient(to top, #fdb796 50%, transparent 50%)'};

	-webkit-background-clip: text, padding-box;
	background-clip: text, padding-box;
	-webkit-text-fill-color: ${(props) =>
		props.color ? props.color : '#fdb796'};
	color: transparent;
	background-size: 100% 200%;
	background-position: top;
	transition: background-position 0.3s ease-in-out;

	&:hover {
		background-position: bottom;
		-webkit-text-fill-color: ${(props) =>
			props.color ? 'white' : 'transparent'};
	}

	@media ${devices.laptopMicrosoft} {
		padding: 10px 20px;
	}

	@media ${devices.mobileL} {
		padding: 10px;
		border-radius: 0px;
	}
`;
