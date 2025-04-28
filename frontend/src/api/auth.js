import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const signup = (userData) => {
  return axios.post(`${API_URL}/api/auth/signup`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_URL}/api/auth/login`, userData);
};
