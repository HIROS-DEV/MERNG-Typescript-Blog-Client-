import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import ImageFrame from '../common/ImageFrame';
import InnerWrapper from '../common/Inner';
import Spinner from '../common/Spinner';
import { BlogsProps } from '../../types/types';
import { ALL_BLOGS } from '../../graphql/queries';
import { randomCssRgba } from '../../utils/function';
import { devices } from '../../css/config';

const BlogsList = () => {
	const result = useQuery(ALL_BLOGS);

	if (result.loading) {
		return <Spinner />;
	}

	const handleClick = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<InnerWrapper>
			<BlogsGallery>
				{result.data.allBlogs.map((blog: BlogsProps) => (
					<div key={blog.id}>
						<ImageFrame
							gradient={`linear-gradient(to bottom, ${randomCssRgba()}, ${randomCssRgba()}, ${randomCssRgba()}, ${randomCssRgba()})`}
						>
							<BlogLink to={`/blogs/${blog.id}`} onClick={handleClick}>
								<BlogImg src={blog.image} alt={blog.title} />
							</BlogLink>
						</ImageFrame>
						<BlogCreatedAt>{blog.createdAt}</BlogCreatedAt>
						<BlogLink to={`/blogs/${blog.id}`}>
							<BlogText>{blog.title}</BlogText>
							<BlogText>Author - {blog.author.username}</BlogText>
						</BlogLink>
					</div>
				))}
			</BlogsGallery>
		</InnerWrapper>
	);
};
export default BlogsList;

const BlogsGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 50px;
`;

const BlogCreatedAt = styled.h3`
	margin: 20px 0;
`;

const BlogLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const BlogImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: all 0.4s ease-in;
	cursor: pointer;

	&:hover {
		scale: calc(1.1);
	}
`;

const BlogText = styled.h1`
	font-size: 2rem;
	margin: 20px 0;
	font-family: 'Courier New', Courier, monospace;
	font-weight: bold;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media ${devices.laptop} {
		max-width: 400px;
	}

	@media ${devices.laptop} {
		max-width: 400px;
	}

	@media ${devices.tabletL} {
		max-width: 300px;
	}

	@media ${devices.mobileS} {
		font-size: 1.5rem;
		max-width: 200px;
	}
`;
