// src/UserProfile.js
import React from 'react';
import './UserProfile.css';

// UserProfile component
const UserProfile = ({
  name,
  email,
  profilePicture,
  bio,
  location,
  jobTitle,
  company,
  skills,
  hobbies,
  socialLinks
}) => {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
        <h1 className="profile-name">{name}</h1>
        <p className="profile-job-title">{jobTitle} at {company}</p>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>About:</strong> {bio}</p>
        <p><strong>Skills:</strong> {skills.join(', ')}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(', ')}</p>
        <div className="profile-social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform}
            </a>
          ))}
        </div>
      </div>
      <div className="profile-actions">
        <button className="profile-action-button">Edit Profile</button>
        <button className="profile-action-button">Follow</button>
      </div>
    </div>
  );
};

export default UserProfile;
