import { ContainerItemForm } from '../styles/ItemForm.styles';
import { FormFieldCurrency, FormFieldRadio, FormFieldText } from './FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ButtonPill } from '../styles/Button.styles';
import { FormFlex } from '../styles/Form.styles';

const validationSchema = yup.object({
  title: yup.string().label('Título').required(),
  type: yup.string().label('Tipo').required(),
  value: yup.number().positive().label('Valor').required(),
});

export default function FinancialItemForm() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [itemValue, setItemValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

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

  const onSubmit = async (data) => {
    const formatValue = Number(data.value) * 100;
    console.log(data);

    try {
      setLoading(true);
      setLoginError('');
    } catch (error) {
      setLoginError(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };

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
        <FormFieldText
          type="date"
          name="date"
          label="Data"
          register={register}
          errors={errors}
        />
      </FormFlex>
      <ButtonPill onClick={() => onSubmit} type="submit">
        Entrar
      </ButtonPill>
    </ContainerItemForm>
  );
}
