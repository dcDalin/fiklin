import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import AuthContext from './Context/AuthContext/AuthContext';
import HasuraUserContext from './Context/HasuraUserContext/HasuraUserContext';

// modals
import AuthModals from './Components/Modals/AuthModals';

// paths
import { HOME, PROFILE, TICKET_RESALE } from './routes/paths';

// pages
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import TicketResalePage from './Pages/TicketResalePage';

const RouterComponent: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { fetchProfile } = useContext(HasuraUserContext);

  useEffect(() => {
    fetchProfile();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={PROFILE} component={ProfilePage} />
        <Route exact path={TICKET_RESALE} component={TicketResalePage} />
      </Switch>
      {!isAuthenticated && <AuthModals />}
    </Router>
  );
};

export default RouterComponent;
