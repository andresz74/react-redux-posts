import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const Posts = ({ fetchPosts, posts, newPost }) => {
	React.useEffect(() => {
		fetchPosts();
	}, []);

	return !posts ? (
		<p>Loading...</p>
	) : (
		<>
			<h2>Posts</h2>
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

const mapStateProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item,
});

export default connect(mapStateProps, { fetchPosts })(Posts);
