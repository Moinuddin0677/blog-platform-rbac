import React, { useState } from 'react';
import { createBlog } from '../api/blogs';

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createBlog({ title, content });
      alert('Blog post created!');
      setTitle('');
      setContent('');
    } catch (err) {
      alert('Failed to create blog: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Create Blog Post</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <button type="submit">Create</button>
    </form>
  );
}

export default AdminDashboard;
