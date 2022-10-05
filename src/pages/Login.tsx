import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Button from '../components/common/Button';
import Inner from '../components/common/Inner';
import Input from '../components/common/Input';
import LoginImg from '../images/login.png';

import { LOGIN } from '../graphql/queries';
import { devices } from '../css/config';

interface LoginProps {
	setError: React.Dispatch<React.SetStateAction<string>> | Function;
	setToken: React.Dispatch<React.SetStateAction<string>> | Function;
}

const Login = ({ setError, setToken }: LoginProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [login, result] = useMutation(LOGIN, {
		onCompleted: () => {
			toast.success(`Login successfully!!!`);
		},
		onError: (error) => {
			setError(error.graphQLErrors[0].message);
		},
	});

	const navigate = useNavigate();
	const handleRegister = () => {
		navigate('/register');
		window.scrollTo({
			top: 0,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		login({ variables: { email, password } });
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		if (result.data) {
			const token = result.data.login.value;
			setToken(token);
			localStorage.setItem('blog-user-token', token);
			navigate('/');
		}
	}, [result.data]); // eslint-disable-line

	return (
		<LoginWrapper>
			<Inner>
				<LoginDiv>
					<LoginImgContainer>
						<Img src={LoginImg} alt='login' />
					</LoginImgContainer>
					<LoginForm onSubmit={handleSubmit}>
						<h1>Login Here</h1>
						<Input
							value={email}
							type='email'
							placeholder='email'
							onChange={({ target }) => setEmail(target.value)}
						/>
						<Input
							value={password}
							type='password'
							placeholder='password'
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Button type='submit' borderRadius='0' color='black' margin='0'>
							Login
						</Button>
						<Button
							borderRadius='0'
							color='#212074'
							margin='0'
							onClick={handleRegister}
						>
							New User? Register
						</Button>
					</LoginForm>
				</LoginDiv>
			</Inner>
		</LoginWrapper>
	);
};
export default Login;

const LoginWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
`;

const LoginDiv = styled.div`
	display: flex;
	justify-content: center;

	@media ${devices.galaxyFold} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const LoginImgContainer = styled.div`
	flex: 0.6;

	@media ${devices.laptopMicrosoft} {
		flex: 0.4;
	}

	@media ${devices.galaxyFold} {
		max-width: 500px;
	}
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const LoginForm = styled.form`
	flex: 0.4;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;

	@media ${devices.laptopMicrosoft} {
		margin-top: 20px;
	}

	@media ${devices.galaxyFold} {
		width: 70vw;
		margin-bottom: 50px;
	}
`;
