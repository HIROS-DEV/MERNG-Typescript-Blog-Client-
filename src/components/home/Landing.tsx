import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { BlogsProps, TokenType } from '../../types/types';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import jwt from 'jwt-decode';

import Button from '../common/Button';
import ImageFrame from '../common/ImageFrame';
import Inner from '../common/Inner';

import { ALL_BLOGS, DELETE_BLOG } from '../../graphql/queries';
import { devices } from '../../css/config';

const Landing = (props: { blog: BlogsProps; token: string | null }) => {
	const latestBlog = props.blog;

	const [deleteBlog] = useMutation(DELETE_BLOG, {
		refetchQueries: [{ query: ALL_BLOGS }],
		onError: (error) => {
			toast.error(error.graphQLErrors[0].message);
		},
		onCompleted: () => {
			toast.success('Blog deleted successfully!!');
		},
	});

	const [decodedToken, setDecodedToken] = useState<TokenType | null>(null);

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/blogs/${latestBlog.id}`);
		window.scrollTo({
			top: 0,
		});
	};

	const handleEdit = (blogId: string) => {
		navigate(`/blogs/${blogId}/edit`);
	};

	const handleDelete = (blogId: string) => {
		deleteBlog({ variables: { deleteBlogId: blogId } });
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		if (props.token) {
			setDecodedToken(jwt(props.token));
		}
	}, [props.token]);

	return (
		<LandingWrapper>
			<Inner display='flex' justifyContent='space-between' padding='50px 0'>
				<div>
					<LandingTitle>{latestBlog.title}</LandingTitle>
					<LandingTitle>Written by {latestBlog.author.username}</LandingTitle>
					<LandingPara>Read to our latest blog.</LandingPara>
					<Button onClick={handleClick}>Read Now</Button>
					{decodedToken && decodedToken.id === latestBlog.author.id && (
						<>
							<Button
								onClick={() => handleEdit(latestBlog.id)}
								padding='20px 40px'
								color='green'
							>
								Edit
							</Button>
							<Button
								onClick={() => handleDelete(latestBlog.id)}
								padding='20px 40px'
								color='crimson'
							>
								Delete
							</Button>
						</>
					)}
				</div>
				<div>
					<ImageFrame>
						<LandingImg
							src={latestBlog.image}
							alt={latestBlog.author.username}
						/>
					</ImageFrame>
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
	padding: 20px;

	@media ${devices.mobileS} {
		padding: 0px;
	}
`;

const LandingTitle = styled.h1`
	font-size: 4rem;
	line-height: 5rem;
	max-width: 800px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media ${devices.laptopMicrosoft} {
		font-size: 3rem;
		line-height: 4rem;
	}

	@media ${devices.laptop} {
		max-width: 500px;
		font-size: 2rem;
	}

	@media ${devices.mobileL} {
		font-size: 1.5rem;
	}
`;

const LandingPara = styled.p`
	margin: 50px 0;
	font-size: 1.3rem;
	opacity: 0.9;

	@media ${devices.mobileL} {
		margin: 20px 0;
		font-size: 1rem;
	}
`;

const LandingImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
