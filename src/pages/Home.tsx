import Host from '../components/home/MeetTheHost';
import Landing from '../components/home/Landing';
import RecentBlogs from '../components/home/RecentBlogs';
import Subscribe from '../components/home/Subscribe';
import UnderDecoration from '../components/home/UnderDecoration';

import { BlogsProps } from '../types/types';

const Home = (props: { blogs: BlogsProps[]; token: string | null }) => {
	const latestBlog = props.blogs[0];

	return (
		<div>
			<Landing blog={latestBlog} token={props.token} />
			<UnderDecoration />
			<RecentBlogs token={props.token} />
			<Subscribe />
			<Host />
		</div>
	);
};
export default Home;
