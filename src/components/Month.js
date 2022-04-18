import { useNavigate } from 'react-router-dom';
import { ReceiptIcon } from '../images/Icons';
import { ButtonUnderlined } from '../styles/Button.styles';
import {
  CardMonth,
  CardMonthFooter,
  CardMonthHeader,
} from '../styles/Dashboard.styles';
import { Summary } from '../styles/Summary.styles';
import { H2, Label, Value } from '../styles/Typography.styles';
import {
  formatCurrency,
  formatMonth,
  getMonthName,
  getMonthNumber,
} from '../utils/format.utils';
import { Skeleton } from './Loading';

export default function Month({ month, balance, loadingBalance }) {
  const navigate = useNavigate();

  const checkCurrentMonth = (date) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const currentDate = `${currentYear}-${getMonthNumber(currentMonth)}`;

    if (currentDate === month) {
      return true;
    }

    return false;
  };

  return (
    <CardMonth current={checkCurrentMonth(month)}>
      <CardMonthHeader>
        {loadingBalance ? (
          <Skeleton height="24px" width="64px" />
        ) : (
          <Label>{formatMonth(month)}</Label>
        )}
        <H2>{getMonthName(month)}</H2>
      </CardMonthHeader>
      {loadingBalance && <Skeleton height="44px" />}
      {balance !== 'No data' && (
        <Summary>
          <ReceiptIcon />
          <Value negative={balance < 0}>{formatCurrency(balance)}</Value>
        </Summary>
      )}
      <CardMonthFooter>
        <ButtonUnderlined
          onClick={() => navigate(`/dashboard/details/${month}`)}
        >
          Ver detalhes
        </ButtonUnderlined>
      </CardMonthFooter>
    </CardMonth>
  );
}
