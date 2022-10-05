import { Link, useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import styled from 'styled-components';
import Button from './Button';
import Inner from './Inner';
import { devices } from '../../css/config';

interface HeaderProps {
	token: string | null;
	setToken: React.Dispatch<React.SetStateAction<null>>;
}

const Header = ({ token, setToken }: HeaderProps) => {
	const client = useApolloClient();
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/login');
	};

	const handleCreate = () => {
		navigate('/blogs/create');
	};

	const handleLogout = () => {
		setToken(null);
		localStorage.clear();
		client.resetStore();
		navigate('/login');
	};

	return (
		<HeaderWrapper>
			<Inner display='flex' justifyContent='space-between' padding='50px 0'>
				<HeaderLinkHome to={'/'}>BLOG</HeaderLinkHome>
				<div>
					<HeaderLink to={'/blogs'}>Blogs</HeaderLink>
					<HeaderLink to={'/about'}>About the Site</HeaderLink>
					{token ? (
						<HeaderButtonsWrapper>
							<Button padding='15px 40px' onClick={handleCreate}>
								Create Blog
							</Button>
							<Button padding='15px 40px' onClick={handleLogout}>
								Log Out
							</Button>
						</HeaderButtonsWrapper>
					) : (
						<Button padding='15px 40px' onClick={handleClick}>
							Login
						</Button>
					)}
				</div>
			</Inner>
		</HeaderWrapper>
	);
};
export default Header;

const HeaderWrapper = styled.header`
	width: 100vw;
	min-height: 8vh;
	display: flex;
	align-items: center;
	background-color: #212074;

	@media ${devices.laptopMicrosoft} {
		height: max-content;
	}
`;

const HeaderLinkHome = styled(Link)`
	color: white;
	text-decoration: none;
	margin: 0 30px;
	font-size: 1.5rem;
`;

const HeaderLink = styled(Link)`
	color: white;
	text-decoration: none;
	margin: 0 30px;
	font-size: 1.1rem;
	font-style: oblique;
	&:hover {
		text-decoration: underline;
	}

	@media ${devices.laptopMicrosoft} {
		font-size: 0.8rem;
	}

	@media ${devices.mobileS} {
		font-size: 0.7rem;
		margin: 0 20px;
	}
`;

const HeaderButtonsWrapper = styled.div`
	margin: 10px;

	@media ${devices.mobileL} {
		margin: 5px 20px;
	}

	@media ${devices.mobileS} {
		margin: 10px 0;
	}
`;
