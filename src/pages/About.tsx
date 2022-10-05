import styled from 'styled-components';
import Creator from '../components/about/Creator';
import Landing from '../components/about/Landing';

const About = () => {
	return (
		<AboutWrapper>
			<Landing />
			<Creator
				image='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
				author='Hiro K'
			/>
			<Creator
				image='https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
				author='Jane Doe'
			/>
		</AboutWrapper>
	);
};
export default About;

const AboutWrapper = styled.div`
	min-height: 62vh;
`;
