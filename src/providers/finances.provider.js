import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const FinancesContext = createContext({});

export const FinancesProvider = ({ children }) => {
  const getSavings = async () => {
    try {
      const response = await api.get('/financial-items/savings');
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getYears = async () => {
    try {
      const response = await api.get('/financial-items/year/years');
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getYearBalance = async (year) => {
    try {
      const response = await api.get(`/financial-items/year/balance/${year}`);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMonthItems = async (month) => {
    try {
      const response = await api.get(`/financial-items/months/${month}`);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMonthBalance = async (month) => {
    try {
      const response = await api.get(
        `/financial-items/months/balance/${month}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  const createFinancialItem = async (data) => {
    try {
      const response = await api.post('/financial-items/item', data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <FinancesContext.Provider
      value={{
        getSavings,
        getYears,
        getYearBalance,
        getMonthItems,
        getMonthBalance,
        createFinancialItem,
      }}
    >
      {children}
    </FinancesContext.Provider>
  );
};

export default function useFinances() {
  const context = useContext(FinancesContext);

  return context;
}
