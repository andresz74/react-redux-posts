import React from 'react';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store/store';
import './App.css';

// const store = createStore(() => [], {}, applyMiddleware());

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>Posts</h1>
				</header>
				<PostForm />
				<Posts />
			</div>
		</Provider>
	);
};

export default App;
