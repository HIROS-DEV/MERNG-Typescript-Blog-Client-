import styled from 'styled-components';
import { devices } from '../../css/config';
import Button from '../common/Button';

const Subscribe = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert(
			'I do not want to send newsletter from this site. If you want to see my skill, please visit https://mern-blog-2022-05-05.vercel.app'
		);
	};

	return (
		<SubscribeWrapper>
			<SubscribeInnerWrapper>
				<SubscribeText>
					Subscribe to our weekly <br /> newsletter
				</SubscribeText>
				<SubscribeForm onClick={handleSubmit}>
					<SubscribeInput type='email' placeholder='Email Address' />
					<Button type='submit' color='gray'>
						Subscribe
					</Button>
				</SubscribeForm>
				<p>We respect your privacy. </p>
			</SubscribeInnerWrapper>
		</SubscribeWrapper>
	);
};
export default Subscribe;

const SubscribeWrapper = styled.div`
	position: relative;
	background: url('https://images.unsplash.com/photo-1658938524834-e0b93a5fdd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')
		no-repeat center center;
	background-size: cover;
	width: 100%;
	height: 60vh;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SubscribeInnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubscribeText = styled.h1`
	font-size: 3rem;
	text-align: center;

	@media ${devices.mobileM} {
		font-size: 2rem;
	}
`;

const SubscribeForm = styled.form`
	display: flex;
	width: 100%;
	height: 100px;
	align-items: center;
	justify-content: space-around;
	margin: 20px 0;
`;

const SubscribeInput = styled.input`
	padding: 20px 50px;
	border: none;
	&:focus {
		outline: 0;
	}

	@media ${devices.mobileM} {
		padding: 10px;
	}
`;
