import styled from 'styled-components';
import Inner from '../common/Inner';

const Landing = () => {
	return (
		<LandingWrapper>
			<Inner display='flex' padding='30px 0'>
				<div>
					<LandingTitle>
						A Blog
						<br />
					</LandingTitle>
					<LandingSubTitle>
						about creative entrepreneurs in design, <br /> fashion, and
						photography.
					</LandingSubTitle>
					<LandingPara>
						It all begins with an idea. Maybe you want to launch a business.{' '}
						<br />
						Maybe you want to turn a hobby into something more. Or maybe you{' '}
						<br />
						have a creative project to share with the world. Whatever it is,{' '}
						<br /> the way you tell your story online can make all the
						difference.
					</LandingPara>
				</div>
			</Inner>
		</LandingWrapper>
	);
};
export default Landing;

const LandingWrapper = styled.header`
	width: 100vw;
	display: flex;
	align-items: center;
	background-color: #212074;
	color: white;
`;

const LandingTitle = styled.h1`
	font-size: 4rem;
	line-height: 5rem;
`;

const LandingSubTitle = styled.h3`
	font-size: 1.75rem;
	line-height: 2.5rem;
	font-family: 'Courier New', Courier, monospace;
	margin: 20px 0;
	font-weight: 600;
`;

const LandingPara = styled.p`
	margin: 50px 0;
	font-size: 1.2rem;
	line-height: 1.5rem;
	font-family: 'Courier New', Courier, monospace;
`;
