import React from 'react';
import SearchField from 'react-search-field';
import MainLayout from '../Components/Layouts/MainLayout';

const TicketResale: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  // eslint-disable-next-line prettier/prettier
  const onChange = query => setSearchQuery(query);
  return (
    <div style={{ backgroundImage: `url("https://via.placeholder.com/500")` }}>
      <MainLayout title="Ticket Resale | Fiklin" metaName="" metaContent="">
        <SearchField
          placeholder="Search..."
          onChange={onChange}
          value={searchQuery}
          // searchText="Search"
          classNames="test-class"
        />
        <h2>profile</h2>
      </MainLayout>
    </div>
  );
};

export default TicketResale;
