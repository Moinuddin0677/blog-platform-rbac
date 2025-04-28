// src/components/BlogList.js
import React, { useEffect, useState } from "react";
import { getBlogs, deleteBlog, updateBlog } from "../api/blogs";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (!confirmed) return;
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      alert("Failed to delete blog");
    }
  };

  const startEditing = (blog) => {
    setEditingId(blog.id);
    setEditTitle(blog.title);
    setEditContent(blog.content);
  };

  const handleUpdate = async (id) => {
    try {
      await updateBlog(id, { title: editTitle, content: editContent });
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      alert("Failed to update blog");
    }
  };

  return (
    <div className="container">
      <h2>Blog Posts</h2>
      {blogs.map((blog) => (
        // ← Apply the blog-card class here:
        <div className="blog-card" key={blog.id}>
          {editingId === blog.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <div className="buttons">
                <button onClick={() => handleUpdate(blog.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              {role === "admin" && (
                <>
                  <button onClick={() => startEditing(blog)}>Edit</button>
                  <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default BlogList;
