import {
  ContainerItemForm,
  ContainerItemFormFooter,
  FormFieldHalf,
} from '../styles/ItemForm.styles';
import { FormFieldText } from './FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ButtonPill } from '../styles/Button.styles';
import useFinances from '../providers/finances.provider';
import useCategories from '../providers/categories.provider';
import { FormFlex, InputLabel } from '../styles/Form.styles';
import Select from './Select';
import Category from './Category';

const validationSchema = yup.object({
  title: yup.string().label('Nome da categoria').min(4).max(20).required(),
});

export default function CategoryForm({ onPostSubmit, category }) {
  const [selectedColor, setSelectedColor] = useState({
    title: '#E4E4E7',
    color: '#E4E4E7',
  });
  const [colorsMenuOpen, setColorsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: category,
  });
  const { createCategory, updateCategory } = useCategories();

  const allColors = [
    '#EDE9FE',
    '#FEF9C3',
    '#CFFAFE',
    '#DBEAFE',
    '#E4E4E7',
    '#ECFCCB',
    '#FCE7F3',
    '#FFEDD5',
  ];

  const colorOptions = allColors.map((color) => {
    return {
      label: color,
      component: <Category title={color} color={color} />,
      action: () => {
        setSelectedColor({ title: color, color: color });
        setColorsMenuOpen(!colorsMenuOpen);
      },
    };
  });

  const onCreateSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      await createCategory({
        ...data,
        color: selectedColor.color,
      });
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setLoading(false);
      onPostSubmit();
    }
  };

  const onUpdateSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      await updateCategory(category?._id, {
        ...data,
        color: selectedColor.color,
      });
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setLoading(false);
      onPostSubmit();
    }
  };

  const onSubmit = (data) => {
    if (category) {
      onUpdateSubmit(data);
    } else onCreateSubmit(data);
  };

  useEffect(() => {
    if (category) {
      setSelectedColor({ title: category?.color, color: category?.color });
    }
  }, []);

  return (
    <ContainerItemForm onSubmit={handleSubmit(onSubmit)}>
      <FormFlex>
        <FormFieldHalf>
          <FormFieldText
            type="text"
            name="title"
            label="Nome da categoria"
            register={register}
            errors={errors}
          />
        </FormFieldHalf>
        <FormFieldHalf>
          <InputLabel>Qual a cor da categoria?</InputLabel>
          <Select
            initialValue="Nenhuma"
            selectedComponent={selectedColor}
            open={colorsMenuOpen}
            setOpen={setColorsMenuOpen}
            items={colorOptions}
            position="bottom"
          />
        </FormFieldHalf>
      </FormFlex>
      <ContainerItemFormFooter>
        {category ? (
          <ButtonPill onClick={() => onSubmit} type="submit" disabled={loading}>
            {loading ? 'Atualizando categoria...' : 'Confirmar'}
          </ButtonPill>
        ) : (
          <ButtonPill onClick={() => onSubmit} type="submit" disabled={loading}>
            {loading ? 'Criando categoria...' : 'Confirmar'}
          </ButtonPill>
        )}
      </ContainerItemFormFooter>
    </ContainerItemForm>
  );
}
