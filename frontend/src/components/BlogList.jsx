import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults(blogs);
      return;
    }

    const results = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, blogs]);

  return (
    <div className="card-content">
      <h2 className="mb-4">📚 Articles</h2>
      <Link to="/create" className="btn btn-success mb-3">Create New Article</Link>

      <div className='card-content'>
        <input
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className='card-content'
          placeholder='Search by Author or title...'
        />
      </div>

      <div className='card-container'>
        {searchResults.map(blog => (
          <div className="card mb-4" key={blog._id}>
            {blog.image && (
              <img src={`http://localhost:5000${blog.image}`} alt={blog.title} />
            )}
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <p className="card-text"><strong>Author:</strong> {blog.author}</p>

              <Link to={`/blog/${blog._id}`} className="card-title">View</Link>
              <Link to={`/blog/${blog._id}/description`} className="btn btn-secondary">View Article</Link>
            </div>
          </div>
        ))}
        {searchTerm && searchResults.length === 0 && (
          <p>Sorry, the search reaturned no articles matching your search criteria.</p>
        )}
      </div>
    </div>
  );
}
