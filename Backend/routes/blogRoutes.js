const express = require('express');
const router = express.Router();
const { getBlogs, createNewBlog, updateExistingBlog, deleteExistingBlog } = require('../controllers/blogController');
const { authenticate, authorizeRole } = require('../middlewares/authMiddleware');

// Public: view blogs
router.get('/', authenticate, getBlogs);

// Admin only: create, update, delete
router.post('/', authenticate, authorizeRole('admin'), createNewBlog);
router.put('/:id', authenticate, authorizeRole('admin'), updateExistingBlog);
router.delete('/:id', authenticate, authorizeRole('admin'), deleteExistingBlog);

module.exports = router;
