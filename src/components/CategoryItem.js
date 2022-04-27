import { useState } from 'react';
import { MenuHorizontalIcon } from '../images/Icons';
import useCategories from '../providers/categories.provider';
import { ButtonIcon, ButtonPillCaution } from '../styles/Button.styles';
import {
  ItemDetails,
  ItemDetailsStart,
  ItemDetailsSummary,
} from '../styles/Details.styles';
import { ContainerModalFooter } from '../styles/Modal.styles';
import Category from './Category';
import CategoryForm from './CategoryForm';
import Menu from './Menu';
import Modal from './Modal';

export default function CategoryItem({
  id,
  title,
  color,
  onPostSubmit,
  category,
}) {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [deleteCategoryModalOpen, setDeleteCategoryModalOpen] = useState(false);
  const { deleteCategory } = useCategories();

  const categoryActions = [
    {
      label: 'Editar categoria',
      action: () => {
        setCategoryMenuOpen(!categoryMenuOpen);
        setCategoryModalOpen(!categoryModalOpen);
      },
    },
    {
      label: 'Excluir categoria',
      action: () => {
        setCategoryMenuOpen(!categoryMenuOpen);
        setDeleteCategoryModalOpen(!deleteCategoryModalOpen);
      },
    },
  ];

  const handleDeleteFinancialItem = async (id) => {
    try {
      await deleteCategory(id);
      onPostSubmit();
      setDeleteCategoryModalOpen(!deleteCategoryModalOpen);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ItemDetails>
        <ItemDetailsStart>
          <ButtonIcon onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}>
            <MenuHorizontalIcon />
          </ButtonIcon>
          <Menu
            open={categoryMenuOpen}
            setOpen={setCategoryMenuOpen}
            items={categoryActions}
          />
          <ItemDetailsSummary>
            <Category title={title} color={color} />
          </ItemDetailsSummary>
        </ItemDetailsStart>
      </ItemDetails>
      <Modal
        open={categoryModalOpen}
        setOpen={setCategoryModalOpen}
        title="Editar categoria"
      >
        <CategoryForm onPostSubmit={onPostSubmit} category={category} />
      </Modal>
      <Modal
        open={deleteCategoryModalOpen}
        setOpen={setDeleteCategoryModalOpen}
        title="Deseja excluir o item?"
      >
        <ContainerModalFooter>
          <ButtonPillCaution onClick={() => handleDeleteFinancialItem(id)}>
            Excluir
          </ButtonPillCaution>
        </ContainerModalFooter>
      </Modal>
    </>
  );
}
