import { useState, createContext, useEffect,useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  function getUsername() {
    // getting stored state
    const temp = localStorage.getItem('username');
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  }

  const [user, setUser] = useState(getUsername());

  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export default AuthContext;
export const useAuthContext = () => useContext(AuthContext);