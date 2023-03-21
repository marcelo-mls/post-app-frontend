import { useMemo } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function AppProvider({ children }) {
  const context = useMemo(() => ({

  }), []);

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
