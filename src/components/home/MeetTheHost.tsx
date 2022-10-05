import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../css/config';
import Button from '../common/Button';

const MeetTheHost = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/about');
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<HostWrapper>
			<HostImgWrapper>
				<div>
					<HostImg1 src='https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
				</div>
				<div>
					<HostImg2 src='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
				</div>
			</HostImgWrapper>
			<HostRightDiv>
				<div>
					<HostText>
						Meet the <br /> Creator
					</HostText>
					<HostPara>
						This site created by Hiro. He used MERN & Typescript & GraphQl
						technologys in this site.
					</HostPara>
				</div>
				<div>
					<Button color='black' onClick={handleClick}>
						Learn more
					</Button>
				</div>
			</HostRightDiv>
		</HostWrapper>
	);
};
export default MeetTheHost;

const HostWrapper = styled.div`
	width: 100vw;
	min-height: 60vh;
	max-width: 1200px;
	margin: 50px auto;
	display: flex;
	align-items: center;
	gap: 400px;

	@media ${devices.laptop} {
		flex-direction: column;
		gap: 0;
	}
`;

const HostImgWrapper = styled.div`
	display: flex;
	position: relative;
`;

const HostRightDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;

	@media ${devices.laptop} {
		text-align: center;
	}
`;

const HostImg1 = styled.img`
	width: 300px;
	height: 500px;
	object-fit: cover;
	border-top: 30px solid #e1ecf4;
	border-left: 20px solid #e1ecf4;
	border-right: 20px solid #e1ecf4;
	border-bottom: 100px solid #e1ecf4;

	@media ${devices.laptopMicrosoft} {
		height: 400px;
		border-bottom: 50px solid #e1ecf4;
	}

	@media ${devices.mobileL} {
		width: 180px;
	}
`;

const HostImg2 = styled.img`
	width: 300px;
	height: 500px;
	object-fit: cover;
	border-top: 30px solid #f8f9fb;
	border-left: 20px solid #f8f9fb;
	border-right: 20px solid #f8f9fb;
	border-bottom: 100px solid #f8f9fb;
	position: absolute;
	left: 280px;
	top: -30px;
	z-index: 10;

	@media ${devices.laptopMicrosoft} {
		height: 400px;
		border-bottom: 50px solid #e1ecf4;
	}

	@media ${devices.laptop} {
		flex-direction: column;
		gap: 0;
		position: relative;
		left: inherit;
	}

	@media ${devices.mobileL} {
		width: 180px;
	}
`;

const HostText = styled.h1`
	font-size: 4rem;
	line-height: 5rem;

	@media ${devices.laptop} {
		font-size: 3rem;
		line-height: 3.5rem;
	}

	@media ${devices.mobileL} {
		padding: 10px 0;
	}
`;

const HostPara = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;

	@media ${devices.laptop} {
		max-width: 500px;
		line-height: 2.5rem;
	}

	@media ${devices.mobileL} {
		font-size: 1rem;
		line-height: 2rem;
	}
`;
