// src/App.js
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  // Example user data
  const user = {
    name: 'Krittika Ravichandran',
    email: 'krittikaravi3@gmail.com',
    profilePicture: 'https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg',
    bio: 'Full Stack Developer with a passion for creating interactive and dynamic web applications.',
    location: 'Erode, TamilNadu',
    jobTitle: 'Software Engineer',
    company: 'Tech Corp',
    skills: ['JavaScript', 'React', 'Node.js', 'CSS'],
    hobbies: ['Photography', 'Traveling', 'Gaming'],
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/krittika-ravichandran-441597256/' },
      { platform: 'GitHub', url: 'https://github.com/krittika575' },
      
    ]
  };

  return (
    <div className="App">
      <UserProfile
        name={user.name}
        email={user.email}
        profilePicture={user.profilePicture}
        bio={user.bio}
        location={user.location}
        jobTitle={user.jobTitle}
        company={user.company}
        skills={user.skills}
        hobbies={user.hobbies}
        socialLinks={user.socialLinks}
      />
    </div>
  );
}

export default App;
