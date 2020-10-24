import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import UserList from './UserList';
import '../main.css';

const App = () => {
	const [ resource, setResource ] = useState('posts');

	return (
		<div>
			<UserList />
			<div id="headers">
				<button className="ui button primary" onClick={() => setResource('posts')}>
					Posts
				</button>
				<button className="ui button secondary" onClick={() => setResource('todos')}>
					Todos
				</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
};

export default App;
