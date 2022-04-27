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

  const createCategory = async (data) => {
    try {
      await api.post('/categories', data);
    } catch (error) {
      throw error;
    }
  };

  const updateCategory = async (id, data) => {
    try {
      await api.put(`/categories/${id}`, data);
    } catch (error) {
      throw error;
    }
  };

  const deleteCategory = async (id) => {
    try {
      await api.delete(`/categories/${id}`);
    } catch (error) {
      throw error;
    }
  };

  return (
    <CategoriesContext.Provider
      value={{ getCategories, createCategory, updateCategory, deleteCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
