import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import jwt from 'jwt-decode';

import Button from '../common/Button';
import Spinner from '../common/Spinner';
import ImageFrame from '../common/ImageFrame';
import Inner from '../common/Inner';

import { ALL_BLOGS, DELETE_BLOG } from '../../graphql/queries';
import { BlogsProps, TokenType } from '../../types/types';
import { randomCssRgba } from '../../utils/function';
import { devices } from '../../css/config';

const RecentBlogs = (props: { token: string | null }) => {
	const navigate = useNavigate();

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

	const handleEdit = (blogId: string) => {
		navigate(`/blogs/${blogId}/edit`);
		window.scrollTo({
			top: 0,
		});
	};

	const handleDelete = (blogId: string) => {
		deleteBlog({ variables: { deleteBlogId: blogId } });
	};

	useEffect(() => {
		if (props.token) {
			setDecodedToken(jwt(props.token));
		}
	}, [props.token]);

	const handleClick = (id: string) => {
		navigate(`/blogs/${id}`);
		window.scrollTo({
			top: 0,
		});
	};

	const result = useQuery(ALL_BLOGS);

	if (result.loading) {
		return <Spinner />;
	}

	return (
		<Inner padding='20px'>
			<BlogsTitle>Recent Blogs</BlogsTitle>
			<BlogsGallery>
				{result.data.allBlogs.slice(0, 9).map((blog: BlogsProps) => (
					<div key={blog.id}>
						<ImageFrame
							gradient={`linear-gradient(to bottom, ${randomCssRgba()}, ${randomCssRgba()}, ${randomCssRgba()}, ${randomCssRgba()})`}
						>
							<BlogImg src={blog.image} alt={blog.title} />
						</ImageFrame>
						<BlogText>{blog.title}</BlogText>
						<BlogPara>Author - {blog.author.username} </BlogPara>
						<Button
							padding='15px 30px'
							margin='20px 0 0 0'
							color='#000'
							onClick={() => handleClick(blog.id)}
						>
							Read Now
						</Button>
						{decodedToken && decodedToken.id === blog.author.id && (
							<>
								<Button
									onClick={() => handleEdit(blog.id)}
									padding='10px'
									color='green'
								>
									Edit
								</Button>
								<Button
									onClick={() => handleDelete(blog.id)}
									padding='10px'
									color='crimson'
								>
									Delete
								</Button>
							</>
						)}
					</div>
				))}
			</BlogsGallery>
		</Inner>
	);
};
export default RecentBlogs;

const BlogsTitle = styled.h1`
	font-size: 3rem;
	padding: 20px 0 50px 0;

	@media ${devices.laptop} {
		font-size: 2rem;
	}
`;

const BlogsGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 50px;

	@media ${devices.laptopMicrosoft} {
		gap: 10px;
		grid-template-columns: repeat(3, 1fr);
	}

	@media ${devices.laptop} {
		gap: 10px;
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${devices.mobileL} {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const BlogImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	padding: 10px;
`;

const BlogText = styled.h1`
	font-size: 1.5rem;
	margin: 20px 0;
	padding: 10px 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const BlogPara = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
