import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './images/bg.jpg';
import mobileImage from './images/popcorn.jpg';
import SearchField from 'react-search-field';
import MainLayout from '../Components/Layouts/MainLayout';

const TicketResale: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  // eslint-disable-next-line prettier/prettier
  const onChange = query => setSearchQuery(query);
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="App-content">
        <MainLayout title="Ticket Resale | Fiklin" metaName="" metaContent="">
          <SearchField
            placeholder="Search..."
            onChange={onChange}
            value={searchQuery}
            // searchText="Search"
            classNames="test-class"
          />
          <h2>get your tickets here</h2>
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

export default TicketResale;
