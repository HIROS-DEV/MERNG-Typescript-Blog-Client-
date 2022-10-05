import React from 'react';
import styled from 'styled-components';
import { devices } from '../../css/config';

type ImageFrameProps = {
	children?: React.ReactNode;
	gradient?: string;
};

const ImageFrame = ({ children, gradient }: ImageFrameProps) => {
	return <Frame gradient={gradient}>{children}</Frame>;
};
export default ImageFrame;

const Frame = styled.div<ImageFrameProps>`
	width: 400px;
	height: 400px;
	border: 50px solid;
	border-image: ${(props) =>
		props.gradient
			? props.gradient
			: 'linear-gradient(to bottom, #2c2f76, #526573, #739172, #f4b798)'};
	border-image-slice: 1;
	border-image-width: 50px;

	@media ${devices.laptopMicrosoft} {
		width: 300px;
		height: 300px;
	}

	@media ${devices.mobileS} {
		width: 250px;
		height: 250px;
	}
`;
