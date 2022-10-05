import styled from 'styled-components';
import { devices } from '../../css/config';
import Inner from '../common/Inner';

const UnderDecoration = () => {
	return (
		<Wrapper>
			<Inner padding='30px'>
				<h1>A blog about creative entrepreneurs.</h1>
			</Inner>
		</Wrapper>
	);
};
export default UnderDecoration;

const Wrapper = styled.div`
	width: 100vw;
	height: 13vh;
	background-color: #fdb796;
	display: flex;
	align-items: center;
	font-size: 2rem;

	@media ${devices.desktop} {
		font-size: 1.5rem;
	}

	@media ${devices.mobileL} {
		font-size: 1rem;
		text-align: center;
	}

	@media ${devices.mobileS} {
		font-size: .8rem;
	}
`;
