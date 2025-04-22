import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function HomePage() {
  return (
    <div className='text-center'>
      <h1 className='note'>DISABLE VPN TO ACCESS ARTICLES!</h1>
    <div className="container text-center mt-1">
      <h1 className="mb-4">📝 Freelog: The hub where creativity meets</h1>
      <p className="lead">Online space fostering collaboration, empowering creativity, and diversity </p>
      <Link to="/blogs" className="btn btn-primary mt-8">Go to Articles</Link>
      <img src="/brain.jpg"
        className='landing-img img-fluid shadow-lg mb-4'
        alt='' />
    </div>
    </div>
  );
}
