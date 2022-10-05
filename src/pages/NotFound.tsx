import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Inner from '../components/common/Inner';
import { devices } from '../css/config';

const NotFound = () => {
	return (
		<NotFoundDiv>
			<Inner>
				<NotFoundPara>
					We couldn't find the page you were looking for. This is either
					because: <br /> ・There is an error in the URL entered into your web
					browser. Please check the URL and try again. <br /> ・The page you are
					looking for has been moved or deleted. <br /> You can return to our
					homepage by clicking <NotFoundLink to={'/'}>here</NotFoundLink>, or
					you can try searching for the content you are seeking by clicking
					here.
				</NotFoundPara>
			</Inner>
		</NotFoundDiv>
	);
};
export default NotFound;

const NotFoundDiv = styled.div`
	width: 100vw;
	min-height: 62vh;
	display: flex;
	justify-content: center;
	align-items: center;

`;

const NotFoundPara = styled.p`
	font-size: 1.2rem;
	line-height: 2rem;
	font-family: 'Courier New', Courier, monospace;

	@media ${devices.laptopMicrosoft} {
		max-width: 1000px;
		margin: 0 20px;
	}
`;

const NotFoundLink = styled(Link)`
	color: #212074;
`;
