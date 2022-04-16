import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import {
  CardHomeActions,
  CardHomeForm,
  CardHomeFormFooter,
} from '../styles/Home.styles';
import { Input } from '../styles/Input.styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUser from '../providers/user.provider';
import { useState } from 'react';
import { LoadingPageOverlay } from '../styles/Loading.styles';
import { LoadingPage } from './Loading';
import { AlertNegative } from '../styles/Alert.styles';
import { ErrorIcon } from '../images/Icons';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { register, handleSubmit } = useForm();
  const { login, username } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setLoginError('');
      await login(data);
    } catch (error) {
      setLoginError(error.response.data.msg);
    } finally {
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
        <Input type="text" placeholder="Usuário" {...register('email')} />
        <Input type="password" placeholder="Senha" {...register('password')} />

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
