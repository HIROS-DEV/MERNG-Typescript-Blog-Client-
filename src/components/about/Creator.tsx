import styled from 'styled-components';
import Inner from '../common/Inner';

type CreatorProps = {
	image: string;
	author: string;
};

const Creator = ({ image, author }: CreatorProps) => {
	return (
		<Inner display='flex' padding='50px 0' gap='50px'>
			<CreatorDiv>
				<CreatorImg src={image} />
			</CreatorDiv>
			<CreatorDiv>
				<CreatorText>{author}</CreatorText>
				<CreatorPara>
					It all begins with an idea. Maybe you want to launch a business. Maybe
					you want to turn a hobby into something more. Or maybe you have a
					creative project to share with the world. Whatever it is, the way you
					tell your story online can make all the difference.
				</CreatorPara>
				<CreatorSubText>Follow me</CreatorSubText>
				<CreatorUl>
					<CreatorLi>Instagram</CreatorLi>&nbsp;-&nbsp;
					<CreatorLi>Facebook</CreatorLi>&nbsp;-&nbsp;
					<CreatorLi>Twitter</CreatorLi>
				</CreatorUl>
			</CreatorDiv>
		</Inner>
	);
};
export default Creator;

const CreatorImg = styled.img`
	width: 100%;
	height: 800px;
	object-fit: cover;
	border-top: 30px solid #e1ecf4;
	border-left: 20px solid #e1ecf4;
	border-right: 20px solid #e1ecf4;
	border-bottom: 100px solid #e1ecf4;
`;

const CreatorDiv = styled.div`
	flex: 0.5;
`;

const CreatorText = styled.h1`
	font-size: 4rem;
	text-align: center;
`;

const CreatorPara = styled.p`
	margin-top: 30px;
	font-size: 1.5rem;
	line-height: 2rem;
	font-family: 'Courier New', Courier, monospace;
`;

const CreatorSubText = styled.h2`
	font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin: 20px 0;
`;

const CreatorUl = styled.ul`
	display: flex;
	font-family: 'Courier New', Courier, monospace;
`;

const CreatorLi = styled.li`
	text-decoration: underline;
`;
