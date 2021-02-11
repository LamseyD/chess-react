import axios from 'axios';

const CHESS_API = axios.create({baseURL: 'https://api.chess.com/pub/player/'});

const API = axios.create({baseURL: 'http://localhost:3001/'});

export const getUserInfo = (username) => CHESS_API.get(`/${username}`);

export const getUserStats = (username) => CHESS_API.get(`/${username}/stats`);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);