import { useState } from 'react';
import { useNavigate } from 'react-router';
import FinancialItem from '../components/FinancialItem';
import FinancialItemForm from '../components/FinancialItemForm';
import { Skeleton } from '../components/Loading';
import Modal from '../components/Modal';
import { ReceiptIcon } from '../images/Icons';
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

export default function ViewDetails({
  month,
  title,
  loadingItems,
  columnNames,
  columnItems,
  loadingBalance,
  balance,
}) {
  const [financialItemModalOpen, setFinancialItemModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ContainerDetails>
        <ContainerDetailsHeader>
          <ContainerDetailsTitle>
            <ButtonUnderlined onClick={() => navigate('/dashboard/')}>
              Voltar
            </ButtonUnderlined>
          </ContainerDetailsTitle>
          <ContainerDetailsActions>
            <ButtonUnderlined
              onClick={() => setFinancialItemModalOpen(!financialItemModalOpen)}
            >
              Adicionar item
            </ButtonUnderlined>
          </ContainerDetailsActions>
        </ContainerDetailsHeader>
        <ContainerDetailsHeader>
          <ContainerDetailsTitle>
            {month ? (
              <>
                <Label>{formatMonth(month)}</Label>
                <H2>{getMonthName(month)}</H2>
              </>
            ) : (
              <H2>{title}</H2>
            )}
          </ContainerDetailsTitle>
        </ContainerDetailsHeader>
        <RowDetails>
          {columnNames.map((column, key) => {
            return (
              <ColumnDetails key={key}>
                <Label negative={column === 'Saídas'}>{column}</Label>
              </ColumnDetails>
            );
          })}
        </RowDetails>
        {loadingItems && (
          <RowDetails>
            <ColumnDetails>
              <Skeleton height="44px" />
            </ColumnDetails>
            <ColumnDetails>
              <Skeleton height="44px" />
            </ColumnDetails>
          </RowDetails>
        )}
        <RowDetails>
          {columnItems.map((column, key) => {
            return (
              <ColumnDetails overflow="auto" key={key}>
                {loadingItems && <Skeleton height="44px" />}
                {column.map(({ _id, title, value, category }) => {
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
            );
          })}
        </RowDetails>
        <ContainerDetailsFooter>
          {loadingBalance ? (
            <Skeleton width="244px" height="28px" />
          ) : (
            <ContainerDetailsFooterSummary>
              <ReceiptIcon />
              <Strong>{`${month ? 'Balanço mensal' : 'Balanço'}`}</Strong>
              <Value negative={balance < 0}>{formatCurrency(balance)}</Value>
            </ContainerDetailsFooterSummary>
          )}
        </ContainerDetailsFooter>
      </ContainerDetails>
      <Modal
        open={financialItemModalOpen}
        setOpen={setFinancialItemModalOpen}
        title="Adicionar item"
      >
        <FinancialItemForm />
      </Modal>
    </>
  );
}
