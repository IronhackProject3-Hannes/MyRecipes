import axios from 'axios';
import { useState, useEffect } from 'react'

export default function EditProjectPage(props) {

	const API_URL = 'http://localhost:5005';

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const projectId = props.match.params.id;

	useEffect(() => {
		axios.get(`${API_URL}/api/projects/${projectId}`)
			.then(response => {
				console.log('use effect');
				setTitle(response.data.title);
				setDescription(response.data.description);
			})
			.catch(err => console.log(err))
	}, [])

	const deleteProject = () => {
		axios.delete(`${API_URL}/api/projects/${projectId}`)
			.then(() => {
				// redirect to the project list
				props.history.push('/projects');
			})
			.catch(err => console.log(err));
	}

	const handleSubmit = e => {
		e.preventDefault();
		const requestBody = { title, description };
		axios.put(`${API_URL}/api/projects/${projectId}`, requestBody)
			.then(response => {
				// this is a redirect using react router dom 
				props.history.push(`/projects/${projectId}`);
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<h3>Edit this project</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title: </label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor="description">Description: </label>
				<input
					type="text"
					name="description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button type="submit">Update this project</button>
			</form>

			<button onClick={deleteProject}>Delete this project 🗑</button>

		</div>
	)
}
