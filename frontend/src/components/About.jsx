import React from 'react';

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="about.jpg"
            alt="About us"
            className="img-fluid rounded-4 shadow mb-5"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5 fw-bold text-primary mb-3">About Freelog</h1>
          <p className="lead text-muted">
            Welcome to <strong>Freelog</strong>, your hub for thoughtful articles, deep dives into various topics including tech,
            and curated stories on modern development, sport, news articles, entertainment, and so much more topics that are of interest to everyone. Whether you're a developer, designer, or curious reader —  there's something here for you. You are more than welcome to post your own interesting topics. Think of Freelog as your all in one cloud where you can freely store information that you want everyone to have access to. 
          </p>
          <p className="lead text-muted">
            This blog was born from a passion for technology and a desire to share knowledge in a relatable, 
            engaging way. Here, we explore trends in software engineering, productivity hacks, personal growth, medical research, sporting events, and all the things that spark curiosity.
          </p>
          <p>
            Each article is crafted with care — blending experience, research, and storytelling — to give you
            not just answers, but insights.
          </p>
        </div>
      </div>

      <hr className="my-5" />

      <div className="text-center">
        <h2 className="fw-semibold text-success mb-3">Meet Freelog's Creator</h2>
        <img
          src="/author.jpg" 
          alt="Author"
          className="rounded-circle shadow mb-3"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <p className="fs-5">
          Hi, I’m <strong>Tafadzwa Munyuki</strong> — a software developer, technical entrepreneur, writer, and lifelong learner.
          I believe in making information freely accessible and sharing what I learn along the way. 
        </p>
        <p>
         Freelog runs entirely as a freemium service. It's all about having a passion for providing information available on-the-go. As freemium service, it would be greatly appreciated if we recieve cash donations via Buy Me a Coffee in order to keep the server running, offer better hosting for Freelog, and expand our featured services.
        </p>
        <div>
        <p>
         Let’s connect! Feel free to reach out or follow me on social media — and thank you for reading!   
        </p>
        
        </div>
      </div>
    </div>
  );
}
