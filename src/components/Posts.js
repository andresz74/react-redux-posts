import React from 'react';

const Posts = () => {
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data));
	}, []);
	return !posts ? (
		<p>Loading...</p>
	) : (
		<>
			{posts.map(post => {
				return (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<hr />
					</div>
				);
			})}
		</>
	);
};

export default Posts;
