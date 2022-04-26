import { useState } from 'react';
import { MenuHorizontalIcon } from '../images/Icons';
import useFinances from '../providers/finances.provider';
import { ButtonIcon, ButtonPillCaution } from '../styles/Button.styles';
import {
  ItemDetails,
  ItemDetailsFooter,
  ItemDetailsStart,
  ItemDetailsSummary,
} from '../styles/Details.styles';
import { ContainerModalFooter } from '../styles/Modal.styles';
import { Strong, Value } from '../styles/Typography.styles';
import { formatCurrency } from '../utils/format.utils';
import Category from './Category';
import FinancialItemForm from './FinancialItemForm';
import Menu from './Menu';
import Modal from './Modal';
import RecurrenceEndForm from './RecurrenceEndForm';
import RecurringBadge from './RecurringBadge';

export default function FinancialItem({
  id,
  title,
  value,
  type,
  category,
  item,
  onPostSubmit,
}) {
  const [itemMenuOpen, setItemMenuOpen] = useState(false);
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [deleteItemModalOpen, setDeleteItemModalOpen] = useState(false);
  const [endRecurrenceItemModalOpen, setEndRecurrenceItemModalOpen] =
    useState(false);
  const { deleteFinancialItem } = useFinances();

  const defaultActions = [
    {
      label: 'Editar item',
      action: () => {
        setItemModalOpen(!itemModalOpen);
        setItemMenuOpen(!itemMenuOpen);
      },
    },
    {
      label: 'Excluir item',
      action: () => {
        setDeleteItemModalOpen(!itemModalOpen);
        setItemMenuOpen(!itemMenuOpen);
      },
    },
  ];

  const itemActions = (items) => {
    const actions = [...items];
    if (item.recurring === true) {
      actions.push({
        label: 'Encerrar recorrência',
        action: () => {
          setEndRecurrenceItemModalOpen(!endRecurrenceItemModalOpen);
          setItemMenuOpen(!itemMenuOpen);
        },
      });
    }

    return actions;
  };

  const checkNegative = (amount, type) => {
    if (type === 'E') {
      return amount - amount * 2;
    }
    return amount;
  };

  const handleDeleteFinancialItem = async (id) => {
    try {
      await deleteFinancialItem(id);
      onPostSubmit();
      setDeleteItemModalOpen(!itemModalOpen);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ItemDetails>
        <ItemDetailsStart>
          <ButtonIcon onClick={() => setItemMenuOpen(!itemMenuOpen)}>
            <MenuHorizontalIcon />
          </ButtonIcon>
          <Menu
            open={itemMenuOpen}
            setOpen={setItemMenuOpen}
            items={itemActions(defaultActions)}
          />
          <ItemDetailsSummary>
            <Strong>{title}</Strong>
            <ItemDetailsFooter>
              {item.recurring === true && <RecurringBadge />}
              {category && (
                <Category title={category.title} color={category.color} />
              )}
            </ItemDetailsFooter>
          </ItemDetailsSummary>
        </ItemDetailsStart>
        <Value negative={checkNegative(value, type) < 0}>
          {formatCurrency(checkNegative(value, type))}
        </Value>
      </ItemDetails>
      <Modal
        open={itemModalOpen}
        setOpen={setItemModalOpen}
        title="Editar item"
      >
        <FinancialItemForm onPostSubmit={onPostSubmit} item={item} />
      </Modal>
      <Modal
        open={deleteItemModalOpen}
        setOpen={setDeleteItemModalOpen}
        title="Deseja excluir o item?"
      >
        <ContainerModalFooter>
          <ButtonPillCaution onClick={() => handleDeleteFinancialItem(id)}>
            Excluir
          </ButtonPillCaution>
        </ContainerModalFooter>
      </Modal>
      <Modal
        open={endRecurrenceItemModalOpen}
        setOpen={setEndRecurrenceItemModalOpen}
        title="Qual a data final de recorrência do item?"
      >
        <RecurrenceEndForm
          onPostSubmit={onPostSubmit}
          itemId={id}
          itemRecurrenceEnd={item.recurrenceEnd}
        />
      </Modal>
    </>
  );
}
