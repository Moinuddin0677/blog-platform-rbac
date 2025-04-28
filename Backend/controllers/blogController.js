const { createBlog, getAllBlogs, updateBlog, deleteBlog } = require('../models/blogModel');

const getBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createNewBlog = async (req, res) => {
  const { title, content } = req.body;
  const authorId = req.user.id;

  try {
    const blog = await createBlog(title, content, authorId);
    res.status(201).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateExistingBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blog = await updateBlog(id, title, content);
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteExistingBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await deleteBlog(id);
    res.json({ message: 'Blog deleted', blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getBlogs, createNewBlog, updateExistingBlog, deleteExistingBlog };
