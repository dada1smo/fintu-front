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
      const { data } = await getMonthBalance(month);
      setMonthBalance(data.balance);
      setLoadingBalance(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFinancialItems(month);
    getBalance(month);
  }, []);

  return (
    <ViewDetails
      month={month}
      loadingItems={loadingItems}
      columnNames={['Entradas', 'Saídas']}
      columnItems={monthItems}
      loadingBalance={loadingBalance}
      balance={monthBalance}
    />
  );
}
