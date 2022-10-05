import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../graphql/queries';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Button from '../components/common/Button';
import Inner from '../components/common/Inner';
import RegisterImg from '../images/register.png';
import Input from '../components/common/Input';

import { SetErrorProps } from '../types/types';
import { devices } from '../css/config';

const Register = ({ setError }: SetErrorProps) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	const [createUser, result] = useMutation(REGISTER, {
		onCompleted: () => {
			toast.success(`User registerd successfully!! Please login.`);
		},
		onError: (error) => {
			setError(error.graphQLErrors[0].message);
		},
	});

	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/login');
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createUser({ variables: { username, email, password, confirmPassword } });
	};

	useEffect(() => {
		if (result.data) {
			navigate('/login');
		}
	}, [result.data]); // eslint-disable-line

	return (
		<RegisterWrapper>
			<Inner>
				<RegisterDiv>
					<RegisterImgContainer>
						<Img src={RegisterImg} alt='register' />
					</RegisterImgContainer>
					<RegisterForm onSubmit={handleSubmit}>
						<h1>Register Here</h1>
						<Input
							value={username}
							type='text'
							placeholder='username'
							onChange={({ target }) => setUsername(target.value)}
						/>
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
						<Input
							value={confirmPassword}
							type='password'
							placeholder='confirm password'
							onChange={({ target }) => setconfirmPassword(target.value)}
						/>
						<Button type='submit' borderRadius='0' color='black' margin='0'>
							Register
						</Button>
						<Button
							borderRadius='0'
							color='#212074'
							onClick={handleLogin}
							margin='0'
						>
							Already User? Login
						</Button>
					</RegisterForm>
				</RegisterDiv>
			</Inner>
		</RegisterWrapper>
	);
};
export default Register;

const RegisterWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
`;

const RegisterDiv = styled.div`
	display: flex;
	justify-content: center;

	@media ${devices.galaxyFold} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const RegisterImgContainer = styled.div`
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

const RegisterForm = styled.form`
	flex: 0.4;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;

	@media ${devices.laptopMicrosoft} {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	@media ${devices.galaxyFold} {
		width: 70vw;
		margin-top: 20px;
		margin-bottom: 50px;
	}
`;
