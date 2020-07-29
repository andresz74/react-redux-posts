import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '.././actions/postActions';

const PostForm = ({ createPost }) => {
	const [title, setTitle] = React.useState('');
	const [body, setBody] = React.useState('');

	const onChangeTitle = e => {
		setTitle(e.target.value);
	};
	const onChangeBody = e => {
		setBody(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		const post = {
			title,
			body,
		};
		createPost(post);
	};

	return (
		<>
			<h1>Add Post</h1>
			<div>
				<div>
					<label>Title: </label>
					<br />
					<input type="text" name="title" value={title} onChange={onChangeTitle} />
				</div>
				<div>
					<label>Body: </label>
					<br />
					<textarea name="body" value={body} onChange={onChangeBody} />
				</div>
				<button type="button" onClick={onSubmit}>
					Submit
				</button>
			</div>
		</>
	);
};

export default connect(null, { createPost })(PostForm);
