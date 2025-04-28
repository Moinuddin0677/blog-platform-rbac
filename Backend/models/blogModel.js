const { pool } = require('../config/db');

const createBlog = async (title, content, authorId) => {
  const query = 'INSERT INTO blogs (title, content, author_id) VALUES ($1, $2, $3) RETURNING *';
  const { rows } = await pool.query(query, [title, content, authorId]);
  return rows[0];
};

const getAllBlogs = async () => {
  const query = 'SELECT blogs.*, users.name as author FROM blogs JOIN users ON blogs.author_id = users.id';
  const { rows } = await pool.query(query);
  return rows;
};

const updateBlog = async (id, title, content) => {
  const query = 'UPDATE blogs SET title = $1, content = $2 WHERE id = $3 RETURNING *';
  const { rows } = await pool.query(query, [title, content, id]);
  return rows[0];
};

const deleteBlog = async (id) => {
  const query = 'DELETE FROM blogs WHERE id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
