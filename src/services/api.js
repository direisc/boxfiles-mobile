import axios from 'axios';

const api = axios.create({
	baseURL: 'https://boxfiles-backend.herokuapp.com',
});

export default api;