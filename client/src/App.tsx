import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// paths
import { HOME, PROFILE } from './routes/paths';
// pages
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={PROFILE} component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;
