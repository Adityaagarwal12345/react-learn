import React from 'react';
import { Bookmark } from 'lucide-react';
import '../App.css'; // 👈 import main CSS

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
        <button className="save-btn">
          Save <Bookmark size={16} />
        </button>
      </div>

      <div className="center">
        <h3>
          <span className="company">Amazon</span>
          <span className="dot"> • </span>
          <span className="posted">5 days ago</span>
        </h3>
        <h2>Senior UI/UX Designer</h2>
        <div className="tags">
          <h4>Part Time</h4>
          <h4>Senior Level</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="details">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
