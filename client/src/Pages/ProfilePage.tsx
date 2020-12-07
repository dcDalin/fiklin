import React from 'react';
import { Helmet } from 'react-helmet';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Profile | Fiklin</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2>profile</h2>
    </>
  );
};

export default ProfilePage;
