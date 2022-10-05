import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Button from '../components/common/Button';
import Inner from '../components/common/Inner';
import Input from '../components/common/Input';

import CreateBlogImg from '../images/create.png';
import { ALL_BLOGS, CREATE_BLOG } from '../graphql/queries';
import { SetErrorProps } from '../types/types';

const CreateBlog = ({ setError }: SetErrorProps) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [description, setDescription] = useState('');

	const [AddBlog] = useMutation(CREATE_BLOG, {
		refetchQueries: [{ query: ALL_BLOGS }],
		onError: (error) => {
			setError(error.graphQLErrors[0].message);
		},
		onCompleted: () => {
			toast.success('Blog created successfully!!');
			navigate('/');
		},
	});

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		AddBlog({
			variables: {
				title,
				image: imageUrl,
				description,
			},
		});

		setTitle('');
		setImageUrl('');
		setDescription('');
	};

	return (
		<CreateBlogWrapper>
			<Inner>
				<CreateBlogDiv>
					<CreateBlogImgContainer>
						<Img src={CreateBlogImg} alt='CreateBlog' />
					</CreateBlogImgContainer>
					<CreateBlogContainer onSubmit={handleSubmit}>
						<h1>CreateBlog Here</h1>
						<Input
							value={title}
							type='text'
							placeholder='title'
							onChange={({ target }) => setTitle(target.value)}
						/>
						<Input
							value={imageUrl}
							type='url'
							placeholder='image url'
							onChange={({ target }) => setImageUrl(target.value)}
						/>
						<CreateBlogTextArea
							value={description}
							name='description'
							placeholder='description'
							cols={30}
							rows={20}
							required
							onChange={({ target }) => setDescription(target.value)}
						></CreateBlogTextArea>
						<Button type='submit' borderRadius='0' color='black'>
							CreateBlog
						</Button>
					</CreateBlogContainer>
				</CreateBlogDiv>
			</Inner>
			;
		</CreateBlogWrapper>
	);
};
export default CreateBlog;

const CreateBlogWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
`;

const CreateBlogDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const CreateBlogImgContainer = styled.div`
	flex: 0.7;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const CreateBlogContainer = styled.form`
	flex: 0.4;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;
`;

const CreateBlogTextArea = styled.textarea`
	resize: none;
	padding: 20px;
	border: 2px solid black;
	&:focus {
		outline: 0;
	}
`;
