import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import jwt from 'jwt-decode';
import styled from 'styled-components';

import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Inner from '../components/common/Inner';
import Spinner from '../components/common/Spinner';

import { ALL_BLOGS, EDIT_BLOG, FIND_BLOG } from '../graphql/queries';
import { TokenType } from '../types/types';

const EditBlog = () => {
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [decodedToken, setDecodedToken] = useState<TokenType | null>(null);

	const navigate = useNavigate();
	const { id } = useParams();

	const result = useQuery(FIND_BLOG, {
		variables: { findBlogId: id },
		skip: !id,
	});

	const [editBlog] = useMutation(EDIT_BLOG, {
		refetchQueries: [{ query: ALL_BLOGS }],
		onError: (error) => {
			toast.error(error.graphQLErrors[0].message);
		},
		onCompleted: () => {
			toast.success('Blog edited successfully!!');
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		editBlog({ variables: { title, image, description, editBlogId: id } });
		setTitle('');
		setImage('');
		setDescription('');
		window.scrollTo({
			top: 0,
		});
		navigate('/');
	};

	useEffect(() => {
		const token = localStorage.getItem('blog-user-token');
		if (token) {
			setDecodedToken(jwt(token));
		}
	}, []);

	useEffect(() => {
		if (result.data && result.data.findBlog) {
			setTitle(result.data.findBlog.title);
			setImage(result.data.findBlog.image);
			setDescription(result.data.findBlog.description);
		}
	}, [result.data]);

	if (result.loading) {
		return <Spinner />;
	}

	return (
		<EditBlogWrapper>
			<Inner>
				<EditBlogDiv>
					<EditBlogForm onSubmit={handleSubmit}>
						<h1>Edit Blog Here</h1>
						<label htmlFor='title'>Title</label>
						<Input
							id='title'
							value={title}
							type='text'
							placeholder='title'
							onChange={({ target }) => setTitle(target.value)}
							required
						/>
						<label htmlFor='image'>Image URL</label>
						<Input
							id='image'
							value={image}
							type='text'
							placeholder='image url'
							onChange={({ target }) => setImage(target.value)}
							required
						/>
						<label htmlFor='description'>Description</label>
						<EditBlogTextArea
							id='description'
							value={description}
							name='description'
							placeholder='description'
							cols={30}
							rows={20}
							required
							onChange={({ target }) => setDescription(target.value)}
						></EditBlogTextArea>
						<Button
							type='submit'
							borderRadius='0'
							color='black'
							disabled={
								decodedToken &&
								decodedToken.id === result.data.findBlog.author.id
									? false
									: true
							}
						>
							Edit
						</Button>
					</EditBlogForm>
				</EditBlogDiv>
			</Inner>
		</EditBlogWrapper>
	);
};
export default EditBlog;

const EditBlogWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
`;

const EditBlogDiv = styled.div`
	display: flex;
	justify-content: center;
	padding: 50px;
`;

const EditBlogForm = styled.form`
	width: 100vw;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;
`;

const EditBlogTextArea = styled.textarea`
	resize: none;
	padding: 20px;
	border: 2px solid black;
	&:focus {
		outline: 0;
	}
`;
