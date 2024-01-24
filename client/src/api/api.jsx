import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

// export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('signup', formData);