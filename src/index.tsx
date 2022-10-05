import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ToastContainer } from 'react-toastify';

import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import './css/reset.css';
import './css/index.css';

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('blog-user-token');
	return {
		headers: {
			...headers,
			authorization: token ? `bearer ${token}` : null,
		},
	};
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_DEV_URL });

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
			<ToastContainer />
		</ApolloProvider>
	</React.StrictMode>
);
