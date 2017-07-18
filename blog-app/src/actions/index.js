import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';

export function getBooksData() {
	const url = `http://localhost:3000/db/`;

	const request = axios.get(url);

	return{
		type: GET_BOOKS,
		payload: request
	}
}