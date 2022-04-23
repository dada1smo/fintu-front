import { createContext, useContext } from 'react';
import api from '../services/api';

const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
  const getCategories = async () => {
    try {
      const response = await api.get('/categories');
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <CategoriesContext.Provider value={{ getCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
