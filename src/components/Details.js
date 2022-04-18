import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFinances from '../providers/finances.provider';
import { ButtonUnderlined } from '../styles/Button.styles';
import {
  ColumnDetails,
  ContainerDetails,
  ContainerDetailsActions,
  ContainerDetailsFooter,
  ContainerDetailsFooterSummary,
  ContainerDetailsHeader,
  ContainerDetailsTitle,
  RowDetails,
} from '../styles/Details.styles';
import { H2, Label, Strong, Value } from '../styles/Typography.styles';
import {
  formatCurrency,
  formatMonth,
  getMonthName,
} from '../utils/format.utils';
import { useNavigate } from 'react-router-dom';
import FinancialItem from './FinancialItem';
import { ReceiptIcon } from '../images/Icons';
import { Skeleton } from './Loading';

export default function Details() {
  const [monthIncomeItems, setMonthIncomeItems] = useState([]);
  const [monthExpenseItems, setMonthExpenseItems] = useState([]);
  const [monthBalance, setMonthBalance] = useState(0);
  const [loadingItems, setLoadingItems] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const { month } = useParams();
  const { getMonthItems, getMonthBalance } = useFinances();
  const navigate = useNavigate();

  const getFinancialItems = async (month) => {
    try {
      setLoadingItems(true);
      const { data } = await getMonthItems(month);
      const income = data.filter((item) => item.type === 'I');
      const expenses = data.filter((item) => item.type === 'E');
      setMonthIncomeItems(income);
      setMonthExpenseItems(expenses);
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
    <ContainerDetails>
      <ContainerDetailsHeader>
        <ContainerDetailsTitle>
          <ButtonUnderlined onClick={() => navigate('/dashboard/')}>
            Voltar
          </ButtonUnderlined>
        </ContainerDetailsTitle>
        <ContainerDetailsActions>
          <ButtonUnderlined onClick={() => navigate('/dashboard/')}>
            Adicionar item
          </ButtonUnderlined>
        </ContainerDetailsActions>
      </ContainerDetailsHeader>
      <ContainerDetailsHeader>
        <ContainerDetailsTitle>
          <Label>{formatMonth(month)}</Label>
          <H2>{getMonthName(month)}</H2>
        </ContainerDetailsTitle>
      </ContainerDetailsHeader>
      <RowDetails>
        <ColumnDetails>
          <Label>Entradas</Label>
        </ColumnDetails>
        <ColumnDetails>
          <Label negative>Saídas</Label>
        </ColumnDetails>
      </RowDetails>
      <RowDetails>
        <ColumnDetails overflow>
          {loadingItems && <Skeleton height="44px" />}
          {monthIncomeItems.map(({ _id, title, value, category }) => {
            return (
              <FinancialItem
                key={_id}
                id={_id}
                title={title}
                value={value}
                category={category}
              />
            );
          })}
        </ColumnDetails>
        <ColumnDetails overflow>
          {loadingItems && <Skeleton height="44px" />}
          {monthExpenseItems.map(({ _id, title, value, type, category }) => {
            return (
              <FinancialItem
                key={_id}
                id={_id}
                title={title}
                value={value}
                type={type}
                category={category}
              />
            );
          })}
        </ColumnDetails>
      </RowDetails>
      <ContainerDetailsFooter>
        {loadingBalance ? (
          <Skeleton width="244px" height="28px" />
        ) : (
          <ContainerDetailsFooterSummary>
            <ReceiptIcon />
            <Strong>Balanço mensal</Strong>
            <Value>{formatCurrency(monthBalance)}</Value>
          </ContainerDetailsFooterSummary>
        )}
      </ContainerDetailsFooter>
    </ContainerDetails>
  );
}
