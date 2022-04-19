/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerMonths, ContainerSelect } from '../styles/Dashboard.styles';
import { monthsMock } from '../mocks/months.mock.js';
import { useEffect, useState } from 'react';
import Select from './Select';
import useFinances from '../providers/finances.provider';
import Month from './Month';

export default function Months() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [yearsOptions, setYearsOptions] = useState([]);
  const [yearBalance, setYearBalance] = useState([...monthsMock]);
  const [yearSelectMenuOpen, setYearSelectMenuOpen] = useState();
  const [loadingBalance, setLoadingBalance] = useState(false);
  const { getYears, getYearBalance } = useFinances();

  const getUserYears = async () => {
    try {
      const response = await getYears();
      setYearsOptions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedYearBalance = async (year) => {
    try {
      setLoadingBalance(true);
      const response = await getYearBalance(year);
      setYearBalance(response.data);
      setLoadingBalance(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedYearBalance(selectedYear);
    getUserYears();
  }, []);

  const userYearOptions = yearsOptions.map((year) => {
    return {
      label: year,
      action: () => {
        getSelectedYearBalance(year);
        setSelectedYear(year);
        setYearSelectMenuOpen(!yearSelectMenuOpen);
      },
    };
  });

  return (
    <ContainerMonths>
      <ContainerSelect>
        <Select
          initialValue={selectedYear}
          open={yearSelectMenuOpen}
          setOpen={setYearSelectMenuOpen}
          items={userYearOptions}
        />
      </ContainerSelect>
      {yearBalance.map(({ month, balance }) => {
        return (
          <Month
            key={month}
            month={month}
            balance={balance}
            loadingBalance={loadingBalance}
          />
        );
      })}
    </ContainerMonths>
  );
}
