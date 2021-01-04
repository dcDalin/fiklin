import React, { useContext, useLayoutEffect } from 'react';

// components
import FullPageLoader from './Components/Loaders/FullPageLoader';
import Router from './Router';

// context
import AuthContext from './Context/AuthContext/AuthContext';

// state
import HasuraUserState from './Context/HasuraUserContext/HasuraUserState';

const App: React.FC = () => {
  const { loadUser, loading } = useContext(AuthContext);

  useLayoutEffect(() => {
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <FullPageLoader />;

  return (
    <HasuraUserState>
      <Router />
    </HasuraUserState>
  );
};

export default App;
