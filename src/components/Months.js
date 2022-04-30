/* eslint-disable react-hooks/exhaustive-deps */
import {
  ContainerMonths,
  ContainerSelect,
  ResponsiveActions,
} from '../styles/Dashboard.styles';
import { monthsMock } from '../mocks/months.mock.js';
import { useEffect, useState } from 'react';
import Select from './Select';
import useFinances from '../providers/finances.provider';
import Month from './Month';
import Modal from './Modal';
import FinancialItemForm from './FinancialItemForm';
import { ButtonIcon, ButtonUnderlined } from '../styles/Button.styles';
import useSidebar from '../providers/sidebar.provider';
import { AddItemIcon, NavigationIcon } from '../images/Icons';
import useWindowSize from '../hooks/use-window-size';
import { ScreenSize } from '../styles/Breakpoints.styles';

export default function Months() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [yearsOptions, setYearsOptions] = useState([]);
  const [yearBalance, setYearBalance] = useState([...monthsMock]);
  const [yearSelectMenuOpen, setYearSelectMenuOpen] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [financialItemModalOpen, setFinancialItemModalOpen] = useState(false);
  const { getYears, getYearBalance } = useFinances();

  const { responsiveSidebar, setResponsiveSidebar } = useSidebar();
  const screenSize = useWindowSize();

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

  const updateMonths = () => {
    getSelectedYearBalance(selectedYear);
    getUserYears();
  };

  return (
    <>
      <ContainerMonths>
        <ContainerSelect>
          <Select
            initialValue={selectedYear}
            open={yearSelectMenuOpen}
            setOpen={setYearSelectMenuOpen}
            items={userYearOptions}
          />
          {screenSize.width > ScreenSize.tablet ? (
            <ButtonUnderlined
              onClick={() => setFinancialItemModalOpen(!financialItemModalOpen)}
            >
              Adicionar item
            </ButtonUnderlined>
          ) : (
            <ResponsiveActions>
              <ButtonIcon
                size="lg"
                onClick={() =>
                  setFinancialItemModalOpen(!financialItemModalOpen)
                }
              >
                <AddItemIcon />
              </ButtonIcon>
              <ButtonIcon
                size="lg"
                onClick={() => setResponsiveSidebar(!responsiveSidebar)}
              >
                <NavigationIcon />
              </ButtonIcon>
            </ResponsiveActions>
          )}
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
      <Modal
        open={financialItemModalOpen}
        setOpen={setFinancialItemModalOpen}
        title="Adicionar item"
      >
        <FinancialItemForm onPostSubmit={updateMonths} />
      </Modal>
    </>
  );
}
