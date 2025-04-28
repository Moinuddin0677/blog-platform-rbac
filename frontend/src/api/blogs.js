import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// const authHeader = () => {
//   const token = localStorage.getItem('token');
//   return { Authorization: `Bearer ${token}` };
// };

// export const getBlogs = () => {
//   return axios.get(`${API_URL}/api/blogs`);
// };

const authHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };
  
  export const getBlogs = () => {
    return axios.get(`${API_URL}/api/blogs`, { headers: authHeader() });
  };

export const createBlog = (blogData) => {
  return axios.post(`${API_URL}/api/blogs`, blogData, { headers: authHeader() });
};

export const updateBlog = (id, blogData) => {
  return axios.put(`${API_URL}/api/blogs/${id}`, blogData, { headers: authHeader() });
};

export const deleteBlog = (id) => {
  return axios.delete(`${API_URL}/api/blogs/${id}`, { headers: authHeader() });
};
