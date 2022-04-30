import { useState } from 'react';
import { useNavigate } from 'react-router';
import CategoryForm from '../components/CategoryForm';
import CategoryItem from '../components/CategoryItem';
import FinancialItem from '../components/FinancialItem';
import FinancialItemForm from '../components/FinancialItemForm';
import { LoadingContent, Skeleton } from '../components/Loading';
import Modal from '../components/Modal';
import useWindowSize from '../hooks/use-window-size';
import {
  AddCategoryIcon,
  AddItemIcon,
  NavigationIcon,
  ReceiptIcon,
  ReturnIcon,
} from '../images/Icons';
import useSidebar from '../providers/sidebar.provider';
import { ScreenSize } from '../styles/Breakpoints.styles';
import { ButtonIcon, ButtonUnderlined } from '../styles/Button.styles';
import {
  ColumnDetails,
  ColumnDetailsHeader,
  ContainerDetails,
  ContainerDetailsActions,
  ContainerDetailsFooter,
  ContainerDetailsFooterSummary,
  ContainerDetailsHeader,
  ContainerDetailsTitle,
  RowDetails,
} from '../styles/Details.styles';
import { LoaderPage } from '../styles/Loading.styles';
import {
  H2,
  Label,
  Parapraph,
  Strong,
  Value,
} from '../styles/Typography.styles';
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
  columnCategories,
  loadingBalance,
  balance,
  onPostSubmit,
  savings,
}) {
  const [financialItemModalOpen, setFinancialItemModalOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const navigate = useNavigate();
  const screenSize = useWindowSize();
  const { responsiveSidebar, setResponsiveSidebar } = useSidebar();

  return (
    <>
      <ContainerDetails>
        <ContainerDetailsHeader>
          {screenSize.width > ScreenSize.tablet ? (
            <>
              <ContainerDetailsTitle>
                <ButtonUnderlined onClick={() => navigate('/dashboard/')}>
                  Voltar
                </ButtonUnderlined>
              </ContainerDetailsTitle>
              <ContainerDetailsActions>
                {columnItems && (
                  <ButtonUnderlined
                    onClick={() =>
                      setFinancialItemModalOpen(!financialItemModalOpen)
                    }
                  >
                    Adicionar item
                  </ButtonUnderlined>
                )}
                {columnCategories && (
                  <ButtonUnderlined
                    onClick={() => setCategoryModalOpen(!categoryModalOpen)}
                  >
                    Adicionar categoria
                  </ButtonUnderlined>
                )}
              </ContainerDetailsActions>
            </>
          ) : (
            <>
              <ContainerDetailsTitle>
                <ButtonIcon size="lg" onClick={() => navigate('/dashboard/')}>
                  <ReturnIcon />
                </ButtonIcon>
              </ContainerDetailsTitle>
              <ContainerDetailsActions>
                {columnItems && (
                  <ButtonIcon
                    size="lg"
                    onClick={() =>
                      setFinancialItemModalOpen(!financialItemModalOpen)
                    }
                  >
                    <AddItemIcon />
                  </ButtonIcon>
                )}
                {columnCategories && (
                  <ButtonIcon
                    size="lg"
                    onClick={() => setCategoryModalOpen(!categoryModalOpen)}
                  >
                    <AddCategoryIcon />
                  </ButtonIcon>
                )}
                <ButtonIcon
                  size="lg"
                  onClick={() => setResponsiveSidebar(!responsiveSidebar)}
                >
                  <NavigationIcon />
                </ButtonIcon>
              </ContainerDetailsActions>
            </>
          )}
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
        {loadingItems && <LoadingContent />}
        <RowDetails fullHeight>
          {columnItems &&
            columnItems.map((column, key) => {
              return (
                <ColumnDetails overflow="auto" key={key}>
                  {column.header && (
                    <ColumnDetailsHeader>
                      <Label negative={column.header === 'Saídas'}>
                        {column.header}
                      </Label>
                    </ColumnDetailsHeader>
                  )}
                  {column.items.map((item) => {
                    return (
                      <FinancialItem
                        key={item._id}
                        id={item._id}
                        title={item.title}
                        value={item.value}
                        category={item.category}
                        item={item}
                        onPostSubmit={onPostSubmit}
                      />
                    );
                  })}
                  {column.items.length === 0 && (
                    <Parapraph>{`Sem ${
                      columnCategories ? 'categorias' : 'itens'
                    } por enquanto.`}</Parapraph>
                  )}
                </ColumnDetails>
              );
            })}
          {columnCategories &&
            columnCategories.map((column, key) => {
              return (
                <ColumnDetails overflow="auto" key={key}>
                  {loadingItems && <Skeleton height="44px" />}
                  {column.map((category) => {
                    return (
                      <CategoryItem
                        key={category._id}
                        id={category._id}
                        title={category.title}
                        color={category.color}
                        onPostSubmit={onPostSubmit}
                        category={category}
                      />
                    );
                  })}
                </ColumnDetails>
              );
            })}
        </RowDetails>
        {!columnCategories && (
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
        )}
      </ContainerDetails>
      {columnItems && (
        <Modal
          open={financialItemModalOpen}
          setOpen={setFinancialItemModalOpen}
          title="Adicionar item"
        >
          <FinancialItemForm onPostSubmit={onPostSubmit} savings={savings} />
        </Modal>
      )}
      {columnCategories && (
        <Modal
          open={categoryModalOpen}
          setOpen={setCategoryModalOpen}
          title="Adicionar categoria"
        >
          <CategoryForm onPostSubmit={onPostSubmit} />
        </Modal>
      )}
    </>
  );
}
