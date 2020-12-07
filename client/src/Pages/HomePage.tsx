import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Find your next tour | Fiklin</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h2>home</h2>
    </>
  );
};

export default HomePage;
