import {
  ContainerItemForm,
  ContainerItemFormFooter,
  FormFieldHalf,
  FormFieldThird,
} from '../styles/ItemForm.styles';
import {
  FormFieldCheckbox,
  FormFieldCurrency,
  FormFieldRadio,
  FormFieldText,
} from './FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ButtonPill } from '../styles/Button.styles';
import { FormFlex, InputLabel } from '../styles/Form.styles';
import Select from './Select';
import useFinances from '../providers/finances.provider';
import useCategories from '../providers/categories.provider';
import Category from './Category';
import { Skeleton } from './Loading';

const validationSchema = yup.object({
  title: yup.string().label('Título').required(),
  type: yup.string('Selecione uma das opções').label('Tipo').required(),
  value: yup.number().positive().label('Valor').required(),
  date: yup.string().label('Data').required(),
  recurring: yup.boolean().label('Item recorrente').nullable(),
  installments: yup.number().min(2).integer().label('Parcelas').nullable(),
  savings: yup.boolean().label('Economias').nullable(),
});

export default function FinancialItemForm({ onPostSubmit, item, savings }) {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isRecurring, setIsRecurring] = useState('Não');
  const [menuOpen, setMenuOpen] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [userCategories, setUserCategories] = useState([]);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemValues = {
    ...item,
    id: item?._id,
    date: item?.date.toString().slice(0, 10),
    value: item?.value / 100,
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: itemValues,
  });
  const { createFinancialItem, updateFinancialItem } = useFinances();
  const { getCategories } = useCategories();

  const typeOptions = [
    {
      optionId: 'income',
      label: 'Entrada',
      value: 'I',
    },
    {
      optionId: 'expense',
      label: 'Saída',
      value: 'E',
    },
  ];

  const recurringInstallmentOptions = [
    {
      label: 'Não',
      action: () => {
        setIsRecurring('Não');
        setMenuOpen(!menuOpen);
      },
    },
    {
      label: 'Recorrente',
      action: () => {
        setIsRecurring('Recorrente');
        setMenuOpen(!menuOpen);
      },
    },
    {
      label: 'Parcelado',
      action: () => {
        setIsRecurring('Parcelado');
        setMenuOpen(!menuOpen);
      },
    },
  ];

  const allUserCategories = userCategories.map(({ _id, title, color }) => {
    return {
      label: title,
      component: <Category title={title} color={color} />,
      action: () => {
        setSelectedCategory({ id: _id, title: title, color: color });
        setCategoriesMenuOpen(!categoriesMenuOpen);
      },
    };
  });

  const categoryOptions = [
    ...allUserCategories,
    {
      label: 'Nenhuma',
      action: () => {
        setSelectedCategory(null);
        setCategoriesMenuOpen(!categoriesMenuOpen);
      },
    },
  ];

  const getUserCategories = async () => {
    try {
      setLoadingCategories(true);
      const { data } = await getCategories();
      setUserCategories(data);
      setLoadingCategories(false);

      if (item?.category) {
        const defaultCategory = data.find(
          (category) => category._id === item.category._id
        );

        setSelectedCategory({
          id: defaultCategory?._id,
          title: defaultCategory?.title,
          color: defaultCategory?.color,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateSubmit = async (data) => {
    const formatValue = Math.round(Number(data.value) * 100);

    try {
      setLoading(true);
      setLoginError('');
      await createFinancialItem({
        ...data,
        value: formatValue,
        status: 'active',
        installment: data.installments >= 2 ? 1 : null,
        category: selectedCategory?.id,
      });
    } catch (error) {
      setLoginError(error.response.data.msg);
    } finally {
      setLoading(false);
      onPostSubmit();
    }
  };

  const onUpdateSubmit = async (data) => {
    const formatValue = Math.round(Number(data.value) * 100);
    const itemCategory = (category) => {
      if (category?.id) {
        return category.id;
      }

      return null;
    };

    try {
      setLoading(true);
      setLoginError('');
      await updateFinancialItem({
        ...data,
        value: formatValue,
        category: itemCategory(selectedCategory),
      });
    } catch (error) {
      setLoginError(error.response.data.msg);
    } finally {
      setLoading(false);
      onPostSubmit();
    }
  };

  const onSubmit = (data) => {
    if (item) {
      onUpdateSubmit(data);
    } else onCreateSubmit(data);
  };

  useEffect(() => {
    getUserCategories();
  }, []);

  useEffect(() => {
    if (!item) {
      reset({
        recurring: false,
        installments: null,
      });
    }
  }, []);

  return (
    <ContainerItemForm onSubmit={handleSubmit(onSubmit)}>
      <FormFieldText
        type="text"
        name="title"
        label="Título"
        placeholder="Título"
        register={register}
        errors={errors}
      />
      <FormFieldRadio
        name="type"
        instruction="Selecione o tipo do item"
        options={typeOptions}
        register={register}
        errors={errors}
      />
      <FormFlex>
        <FormFieldCurrency
          name="value"
          label="Valor (R$)"
          placeholder="0"
          register={register}
          errors={errors}
        />
        {!item?.recurrenceEnd && (
          <FormFieldText
            type="date"
            name="date"
            label="Data"
            register={register}
            errors={errors}
          />
        )}
      </FormFlex>
      <FormFlex>
        {!item && !savings && (
          <FormFieldHalf>
            <InputLabel>O item é recorrente ou parcelado?</InputLabel>
            <Select
              initialValue={isRecurring}
              open={menuOpen}
              setOpen={setMenuOpen}
              items={recurringInstallmentOptions}
            />
          </FormFieldHalf>
        )}
        <FormFieldHalf>
          <InputLabel>Qual a categoria do item?</InputLabel>
          {loadingCategories ? (
            <Skeleton height="46px" />
          ) : (
            <Select
              initialValue="Nenhuma"
              selectedComponent={selectedCategory}
              open={categoriesMenuOpen}
              setOpen={setCategoriesMenuOpen}
              items={categoryOptions}
              position="bottom"
            />
          )}
        </FormFieldHalf>
      </FormFlex>
      {!item && !savings && (
        <FormFlex>
          {isRecurring === 'Recorrente' && (
            <FormFieldCheckbox
              name="recurring"
              label="Item recorrente"
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {isRecurring === 'Parcelado' && (
            <FormFieldThird>
              <FormFieldText
                name="installments"
                label="Parcelas"
                type="number"
                placeholder="2"
                step="1"
                register={register}
                errors={errors}
              />
            </FormFieldThird>
          )}
          {savings && (
            <FormFieldCheckbox
              name="savings"
              label="O item faz parte das economias"
              register={register}
              errors={errors}
              control={control}
            />
          )}
        </FormFlex>
      )}
      <ContainerItemFormFooter>
        {item ? (
          <ButtonPill onClick={() => onSubmit} type="submit" disabled={loading}>
            {loading ? 'Atualizando item...' : 'Editar item'}
          </ButtonPill>
        ) : (
          <ButtonPill onClick={() => onSubmit} type="submit" disabled={loading}>
            {loading ? 'Adicionando item...' : 'Confirmar'}
          </ButtonPill>
        )}
      </ContainerItemFormFooter>
    </ContainerItemForm>
  );
}
