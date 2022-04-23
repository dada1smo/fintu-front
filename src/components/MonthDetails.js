import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFinances from '../providers/finances.provider';
import ViewDetails from '../layouts/ViewDetails';

export default function MonthDetails() {
  const [monthItems, setMonthItems] = useState([]);
  const [monthBalance, setMonthBalance] = useState(0);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const { month } = useParams();
  const { getMonthItems, getMonthBalance } = useFinances();

  const getFinancialItems = async (month) => {
    try {
      setLoadingItems(true);
      setMonthItems([]);
      const { data } = await getMonthItems(month);
      const income = data.filter((item) => item.type === 'I');
      const expenses = data.filter((item) => item.type === 'E');
      setMonthItems([income, expenses]);
      setLoadingItems(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async (month) => {
    try {
      setLoadingBalance(true);
      setMonthBalance(0);
      const { data } = await getMonthBalance(month);
      setMonthBalance(data.balance);
      setLoadingBalance(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMonth = () => {
    getFinancialItems(month);
    getBalance(month);
  };

  useEffect(() => {
    updateMonth();
  }, []);

  return (
    <ViewDetails
      month={month}
      loadingItems={loadingItems}
      columnNames={['Entradas', 'Saídas']}
      columnItems={monthItems}
      loadingBalance={loadingBalance}
      balance={monthBalance}
      onPostSubmit={updateMonth}
    />
  );
}
