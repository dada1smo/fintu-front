import {
  ContainerItemForm,
  ContainerItemFormFooter,
} from '../styles/ItemForm.styles';
import { FormFieldText } from './FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ButtonPill } from '../styles/Button.styles';
import useFinances from '../providers/finances.provider';

const validationSchema = yup.object({
  recurrenceEnd: yup.string().label('Fim da recorrência').required(),
});

export default function RecurrenceEndForm({
  onPostSubmit,
  itemId,
  itemRecurrenceEnd,
}) {
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
    defaultValues: {
      recurrenceEnd: itemRecurrenceEnd?.toString().slice(0, 10),
    },
  });
  const { updateFinancialItem } = useFinances();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      await updateFinancialItem({
        ...data,
        id: itemId,
      });
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setLoading(false);
      onPostSubmit();
    }
  };

  return (
    <ContainerItemForm onSubmit={handleSubmit(onSubmit)}>
      <FormFieldText
        type="date"
        name="recurrenceEnd"
        label="Fim da recorrência"
        register={register}
        errors={errors}
      />
      <ContainerItemFormFooter>
        <ButtonPill onClick={() => onSubmit} type="submit" disabled={loading}>
          {loading ? 'Finalizando recorrência...' : 'Confirmar'}
        </ButtonPill>
      </ContainerItemFormFooter>
    </ContainerItemForm>
  );
}
