import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function HomePage() {
  return (
    <div className="container-fluid text-center p-4">
      <h1 className="note text-danger mb-3">DISABLE VPN TO ACCESS ARTICLES!</h1>

      <div className="container mt-1">
        <h1 className="mb-4">📝 Freelog: The hub where creativity meets</h1>
        <p className="lead">Online space fostering collaboration, empowering creativity, and diversity</p>

        <Link to="/blogs" className="btn btn-primary my-4">
          Go to Articles
        </Link>

        <div className="d-flex justify-content-center">
          <img 
            src="/brain.jpg" 
            className="landing-img img-fluid shadow-lg mb-4" 
            alt="Brain representing creativity" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </div>

        {/* --- Affiliate Section --- */}
        <div className="mt-5">
          <h2 className="mb-4">Recommended Tools & Gadgets</h2>
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <a 
              href="https://www.amazon.com/dp/B0CP4CG1ZB?tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-warning"
            >
              🎧 Get AirPods Pro 2
            </a>
            <a 
              href="https://www.amazon.com/dp/B07CZDXDG8?tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success"
            >
              🔋 Grab Portable Charger
            </a>
            <a 
              href="https://www.amazon.com/dp/B09HMKFDXC?tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-info"
            >
              🖱️ Upgrade with Logitech MX Master 3S Mouse
            </a>
          </div>

          <p className="small text-muted mt-3">
            *These are affiliate links. I may earn a commission at no extra cost to you!
          </p>
        </div>
        {/* --- End Affiliate Section --- */}
      </div>
    </div>
  );
}
