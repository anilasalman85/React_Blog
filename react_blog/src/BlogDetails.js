import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from './data/blog.json';

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id.toString() === id);

  const handleBackClick = () => {
    navigate('/'); // Adjust the path according to your routes
  };

  if (!blog) {
    return (
      <div className="max-w-2xl p-4">
        <p>Blog post not found.</p>
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="flex p-4">
      <div className="flex-shrink-0">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto"
            style={{ maxWidth: '400px', maxHeight: '500px', objectFit: 'cover' }} // Ensure the image doesn't shrink
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
      </div>
      <div className="flex-1 ml-4 flex flex-col">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-2">{blog.date}</p>
        <p className="mb-4">{blog.description}</p>
        <button
          onClick={handleBackClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-auto"
          style={{ width: 'auto', maxWidth: '200px' }} // Fixes button size
        >
          Back to Blog List
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
