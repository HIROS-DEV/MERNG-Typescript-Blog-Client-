import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import jwt from 'jwt-decode';

import ImageFrame from '../components/common/ImageFrame';
import InnerWrapper from '../components/common/Inner';
import Button from '../components/common/Button';
import Spinner from '../components/common/Spinner';
import NotFound from './NotFound';

import { ALL_BLOGS, DELETE_BLOG } from '../graphql/queries';
import { BlogsProps, TokenType } from '../types/types';
import { devices } from '../css/config';

const BlogDetail = (props: { token: string | null }) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const result = useQuery(ALL_BLOGS);

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
		if (decodedToken && decodedToken.id === blog.author.id) {
			setTimeout(() => {
				navigate(`/blogs/${blogId}/edit`);
				window.scrollTo({
					top: 0,
				});
			}, 0);
		}
	};

	const handleDelete = (blogId: string) => {
		deleteBlog({ variables: { deleteBlogId: blogId } });
	};

	const blog = result.data.allBlogs.find(
		(blog: BlogsProps) => blog.id === id?.toString()
	);

	const handleClick = () => {
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		if (props.token) {
			setDecodedToken(jwt(props.token));
		}
	}, [props.token]);

	if (result.loading) {
		return <Spinner />;
	}

	if (!blog) {
		return <NotFound />;
	}

	return (
		<BlogDetailWrapper>
			<InnerWrapper blogDetailPadding='0px'>
				<BlogDetailTitle>Blog - {blog?.title}</BlogDetailTitle>
				<BlogDetailDiv>
					<BlogDetailInnerDiv>
						<ImageFrame>
							<BlogDetailImg src={blog?.image} alt={blog?.author} />
						</ImageFrame>
					</BlogDetailInnerDiv>
					<BlogDetailInnerDiv>
						<BlogDescription>{blog?.description}</BlogDescription>
					</BlogDetailInnerDiv>
				</BlogDetailDiv>
				<Link to={`/blogs`}>
					<Button color='black' onClick={handleClick}>
						Back Page
					</Button>
					{decodedToken && decodedToken.id === blog.author.id && (
						<>
							<Button
								type='button'
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
				</Link>
			</InnerWrapper>
		</BlogDetailWrapper>
	);
};
export default BlogDetail;

const BlogDetailWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
	padding: 100px;

	@media ${devices.galaxyFold} {
		padding: 50px;
	}
`;

const BlogDetailTitle = styled.h1`
	font-size: 4rem;
	max-width: 500px;

	@media ${devices.galaxyFold} {
		max-width: 300px;
	}

	@media ${devices.mobileL} {
		font-size: 3rem;
		max-width: 200px;
	}
`;

const BlogDetailDiv = styled.div`
	display: flex;
	padding: 50px 0;

	@media ${devices.galaxyFold} {
		display: block;
	}
`;

const BlogDetailImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const BlogDetailInnerDiv = styled.div`
	flex: 0.5;
	max-width: 500px;

	@media ${devices.galaxyFold} {
		max-width: 700px;
		padding: 20px 0;
	}

	@media ${devices.galaxyFold} {
		max-width: 300px;
	}

	@media ${devices.galaxyFold} {
		max-width: 250px;
	}
`;

const BlogDescription = styled.p`
	font-family: 'Courier New', Courier, monospace;
	font-size: 1.5rem;
	line-height: 2rem;

	@media ${devices.mobileL} {
		font-size: 1rem;
	}
`;
