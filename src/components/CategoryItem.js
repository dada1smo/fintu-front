import { useState } from 'react';
import useWindowSize from '../hooks/use-window-size';
import { MenuHorizontalIcon } from '../images/Icons';
import useCategories from '../providers/categories.provider';
import { ScreenSize } from '../styles/Breakpoints.styles';
import {
  ButtonIcon,
  ButtonPillCaution,
  ButtonUnderlined,
} from '../styles/Button.styles';
import {
  ItemDetails,
  ItemDetailsStart,
  ItemDetailsSummary,
} from '../styles/Details.styles';
import {
  ContainerModalFooter,
  ContainerModalMobile,
} from '../styles/Modal.styles';
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
  const [mobileCategoryMenuOpen, setMobileCategoryMenuOpen] = useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [deleteCategoryModalOpen, setDeleteCategoryModalOpen] = useState(false);
  const { deleteCategory } = useCategories();
  const screenSize = useWindowSize();

  const categoryActions = [
    {
      label: 'Editar categoria',
      action: () => {
        setCategoryMenuOpen(!categoryMenuOpen);
        setCategoryModalOpen(!categoryModalOpen);
        setMobileCategoryMenuOpen(false);
      },
    },
    {
      label: 'Excluir categoria',
      action: () => {
        setCategoryMenuOpen(!categoryMenuOpen);
        setDeleteCategoryModalOpen(!deleteCategoryModalOpen);
        setMobileCategoryMenuOpen(false);
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
          {screenSize.width > ScreenSize.tablet ? (
            <>
              <ButtonIcon
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
              >
                <MenuHorizontalIcon />
              </ButtonIcon>
              <Menu
                open={categoryMenuOpen}
                setOpen={setCategoryMenuOpen}
                items={categoryActions}
              />
            </>
          ) : (
            <ButtonIcon
              onClick={() => setMobileCategoryMenuOpen(!mobileCategoryMenuOpen)}
            >
              <MenuHorizontalIcon />
            </ButtonIcon>
          )}
          <ItemDetailsSummary>
            <Category title={title} color={color} />
          </ItemDetailsSummary>
        </ItemDetailsStart>
      </ItemDetails>
      <Modal
        open={mobileCategoryMenuOpen}
        setOpen={setMobileCategoryMenuOpen}
        title="Opções"
      >
        <ContainerModalMobile>
          {categoryActions.map(({ label, action }) => {
            return (
              <ButtonUnderlined key={label} onClick={action}>
                {label}
              </ButtonUnderlined>
            );
          })}
        </ContainerModalMobile>
      </Modal>
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
