import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFinances from '../providers/finances.provider';
import ViewDetails from '../layouts/ViewDetails';

export default function SavingsDetails() {
  const [savingsItems, setSavingsItems] = useState([]);
  const [savingsBalance, setSavingsBalance] = useState(0);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const { getSavingsItems, getSavingsBalance } = useFinances();

  const getFinancialItems = async (month) => {
    try {
      setLoadingItems(true);
      setSavingsItems([]);
      const { data } = await getSavingsItems();
      setSavingsItems([data]);
      setLoadingItems(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async (month) => {
    try {
      setLoadingBalance(true);
      setSavingsBalance(0);
      const { data } = await getSavingsBalance();
      setSavingsBalance(data);
      setLoadingBalance(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSavings = () => {
    getFinancialItems();
    getBalance();
  };

  useEffect(() => {
    updateSavings();
  }, []);

  return (
    <ViewDetails
      loadingItems={loadingItems}
      columnNames={['Economias']}
      columnItems={savingsItems}
      loadingBalance={loadingBalance}
      balance={savingsBalance}
      onPostSubmit={updateSavings}
      savings
    />
  );
}
