import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
    setToken(localStorage.getItem('token'));
  }, []);

  const login = async (data) => {
    const response = await api.post('/auth/login', data);

    localStorage.setItem(
      'username',
      JSON.stringify(response.data.payload.username)
    );
    localStorage.setItem('token', response.data.token);
    setUsername(response.data.payload.username);
    setToken(response.data.token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken('');
    setUsername('');
  };

  const signup = async (data) => {
    await api.post('/auth/signup', data);
  };

  return (
    <UserContext.Provider value={{ login, logout, signup, username, token }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  const context = useContext(UserContext);

  return context;
}
