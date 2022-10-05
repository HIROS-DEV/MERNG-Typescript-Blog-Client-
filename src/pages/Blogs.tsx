import styled from 'styled-components';
import BlogsList from '../components/blogs/BlogsList';

const Blogs = () => {
	return (
		<BlogsWrapper>
			<BlogsList />
		</BlogsWrapper>
	);
};
export default Blogs;

const BlogsWrapper = styled.div`
	width: 100vw;
	min-height: 62vh;
	padding: 20px;
`;
