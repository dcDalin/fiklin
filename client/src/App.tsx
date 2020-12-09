import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import FullPageLoader from './Components/Loaders/FullPageLoader';

// context
import AuthContext from './Context/AuthContext/AuthContext';

// paths
import { HOME, PROFILE, TICKET_RESALE } from './routes/paths';

// pages
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import TicketResalePage from './Pages/TicketResalePage';

const App: React.FC = () => {
  const { loadUser, loading } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <FullPageLoader />;
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={PROFILE} component={ProfilePage} />
        <Route exact path={TICKET_RESALE} component={TicketResalePage} />
      </Switch>
    </Router>
  );
};

export default App;
