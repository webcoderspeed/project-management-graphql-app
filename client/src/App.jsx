import AddClientModal from './components/AddClientModal';
import Clients from './components/Clients';
import Header from './components/Header';
import Projects from './components/Projects';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				clients: {
					merge(existing, incoming) {
						return incoming;
					},
				},
				projects: {
					merge(existing, incoming) {
						return incoming;
					},
				},
			},
		},
	},
});

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache,
});

const App = () => {
	return (
		<>
			<ApolloProvider client={client}>
				<Router>
					<Header />
					<div className='container'>
						<AddClientModal />
						<Projects />
						<Clients />
					</div>
				</Router>
			</ApolloProvider>
		</>
	);
};

export default App;
