import React from 'react';

import MainLayout from '../Components/Layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url("https://via.placeholder.com/500")` }}>
      <MainLayout title="Find your next tour | Fiklin" metaName="" metaContent="">
        <h2>home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </MainLayout>
    </div>
  );
};

export default HomePage;
