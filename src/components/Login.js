import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import {
  CardHomeActions,
  CardHomeForm,
  CardHomeFormFooter,
} from '../styles/Home.styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUser from '../providers/user.provider';
import { useState } from 'react';
import { LoadingPage } from './Loading';
import { AlertNegative } from '../styles/Alert.styles';
import { ErrorIcon } from '../images/Icons';
import { FormFieldText } from './FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';

const validationSchema = yup.object({
  email: yup.string().label('E-mail').email().required(),
  password: yup.string().label('Senha').required(),
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const { login } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setLoginError('');
      await login(data);
    } catch (error) {
      setLoginError(error.response.data.msg);
      setLoading(false);
    }
  };

  return (
    <>
      <CardHomeForm onSubmit={handleSubmit(onSubmit)}>
        <Label>Login</Label>
        {loginError && (
          <AlertNegative>
            <ErrorIcon />
            {loginError}
          </AlertNegative>
        )}
        <FormFieldText
          type="text"
          label="E-mail"
          placeholder="E-mail"
          name="email"
          register={register}
          errors={errors}
        />
        <FormFieldText
          type="password"
          label="Senha"
          placeholder="Senha"
          name="password"
          register={register}
          errors={errors}
        />

        <CardHomeFormFooter>
          <ButtonPill onClick={() => onSubmit} type="submit">
            Entrar
          </ButtonPill>
        </CardHomeFormFooter>
      </CardHomeForm>
      <CardHomeActions>
        <ButtonUnderlined onClick={() => navigate('/register')}>
          Criar nova conta
        </ButtonUnderlined>
      </CardHomeActions>
      {loading && <LoadingPage>Loading...</LoadingPage>}
    </>
  );
}
