import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';

import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateBlog from './pages/CreateBlog';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Spinner from './components/common/Spinner';
import { ALL_BLOGS } from './graphql/queries';
import EditBlog from './pages/EditBlog';

const App = () => {
	const [token, setToken] = useState(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_errorMessage, setErrorMessage] = useState<string | null>(null);
	const result = useQuery(ALL_BLOGS);

	if (result.loading) {
		return <Spinner />;
	}

	const notify = (message: string) => {
		toast.error(message);
		setTimeout(() => {
			setErrorMessage(null);
		}, 5000);
	};

	return (
		<BrowserRouter>
			<Header token={token} setToken={setToken} />
			<Routes>
				{token ? (
					<>
						<Route
							path='/'
							element={<Home blogs={result.data?.allBlogs} token={token} />}
						/>
						<Route path='/blogs' element={<Blogs />} />
						<Route
							path='/blogs/create'
							element={<CreateBlog setError={notify} />}
						/>
						<Route path='/blogs/:id' element={<BlogDetail token={token} />} />
						<Route path='/blogs/:id/edit' element={<EditBlog />} />
						<Route path='/about' element={<About />} />
						<Route path='*' element={<NotFound />} />
					</>
				) : (
					<>
						<Route
							path='/'
							element={<Home blogs={result.data?.allBlogs} token={null} />}
						/>
						<Route path='/blogs' element={<Blogs />} />
						<Route path='/blogs/:id' element={<BlogDetail token={null} />} />
						<Route path='/about' element={<About />} />
						<Route
							path='/login'
							element={<Login setError={notify} setToken={setToken} />}
						/>
						<Route path='/register' element={<Register setError={notify} />} />
						<Route path='*' element={<NotFound />} />
					</>
				)}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
export default App;
