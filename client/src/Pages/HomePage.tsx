import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './images/bg.jpg';
import mobileImage from './images/popcorn.jpg';
import MainLayout from '../Components/Layouts/MainLayout';

const HomePage: React.FC = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <MainLayout title="Find your next tour | Fiklin" metaName="" metaContent="">
          {/* <h2>home</h2> */}
          <h1>FIKLIN | YOUR ONLINE TICKET VENDOR </h1>
        </MainLayout>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

export default HomePage;
