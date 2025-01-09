import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowGithubUser = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, [username]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <img src={userData.avatar_url} alt={userData.login} width="100" />
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default ShowGithubUser;
