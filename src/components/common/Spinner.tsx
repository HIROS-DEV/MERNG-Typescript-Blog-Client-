import styled, { keyframes } from 'styled-components';

const Spinner = () => {
	return (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	);
};
export default Spinner;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const Loader = styled.div`
	border: 10px solid #f3f3f3;
	border-top: 10px solid #3498db;
	border-radius: 50%;
	width: 200px;
	height: 200px;
	animation: ${spin} 1s linear infinite;
	z-index: 100;
`;
