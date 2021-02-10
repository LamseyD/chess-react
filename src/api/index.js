import axios from 'axios';

const CHESS_API = axios.create({baseURL: 'https://api.chess.com/pub/player/'});

export const getUserInfo = (username) => CHESS_API.get(`/${username}`);

export const getUserStats = (username) => CHESS_API.get(`/${username}/stats`)