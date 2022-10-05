import styled from 'styled-components';
import { devices } from '../../css/config';
import Inner from './Inner';

const Footer = () => {
	return (
		<FooterWrapper>
			<Inner display='flex' justifyContent='space-between'>
				<FooterDiv>
					<FooterText>Follow Me</FooterText>
					<FooterUl>
						<FooterLi>Instagram</FooterLi>
						<FooterLi>Facebook</FooterLi>
						<FooterLi>Twitter</FooterLi>
					</FooterUl>
				</FooterDiv>
				<FooterDiv>
					<FooterLogo>BLOG</FooterLogo>
					<FooterPara>
						This site was created by{' '}
						<FooterLink href='https://github.com/HIROS-DEV' target={'_blank'}>
							Hiro
						</FooterLink>{' '}
					</FooterPara>
					<FooterPara>
						Hiro is a web developer. Not a web designer.
						<br />
						So, he lent the design from{' '}
						<FooterLink
							href='https://sundew-fluid-demo.squarespace.com/'
							target={'_blank'}
						>
							Squarespace
						</FooterLink>{' '}
						page. <br />
						Of course, he coded all by himself except design.
					</FooterPara>
				</FooterDiv>
			</Inner>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	width: 100vw;
	min-height: 30vh;
	background-color: #212074;
	color: white;

	@media ${devices.laptopMicrosoft} {
		height: max-content;
	}
`;

const FooterDiv = styled.div`
	height: 100%;
	padding: 50px 0;

	@media ${devices.laptopMicrosoft} {
		padding: 20px;
	}
`;

const FooterText = styled.h1`
	font-size: 1.2rem;
`;

const FooterUl = styled.ul``;
const FooterLi = styled.li`
	font-size: 0.8rem;
	margin: 20px 0;
	text-decoration: underline;
	color: #fdb796;
	letter-spacing: 0.2rem;
`;

const FooterLogo = styled.h1`
	font-size: 2rem;
	color: #fdb796;
`;

const FooterPara = styled.p`
	font-size: 0.8rem;
	line-height: 1rem;
	margin: 20px 0;
`;

const FooterLink = styled.a`
	color: #fdb796;
`;
