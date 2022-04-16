import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import {
  CardHomeActions,
  CardHomeForm,
  CardHomeFormFooter,
} from '../styles/Home.styles';
import { Input, InputFlex } from '../styles/Input.styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AlertNegative, AlertPositive } from '../styles/Alert.styles';
import { CheckIcon, ErrorIcon } from '../images/Icons';
import useUser from '../providers/user.provider';
import { useForm } from 'react-hook-form';
import { LoadingPage } from './Loading';

export default function Register() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { signup } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signup(data);
      setIsUserRegistered(true);
    } catch (error) {
      setSignupError(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CardHomeForm onSubmit={handleSubmit(onSubmit)}>
        <Label>Cadastro</Label>
        {signupError && (
          <AlertNegative>
            <ErrorIcon />
            {signupError}
          </AlertNegative>
        )}
        {isUserRegistered ? (
          <AlertPositive>
            <CheckIcon />
            Usuário cadastrado com sucesso
          </AlertPositive>
        ) : (
          <>
            <InputFlex>
              <Input
                type="text"
                placeholder="Usuário"
                {...register('username')}
              />
              <Input type="text" placeholder="E-mail" {...register('email')} />
            </InputFlex>
            <InputFlex>
              <Input
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
              <Input type="password" placeholder="Confirme sua senha" />
            </InputFlex>
            <CardHomeFormFooter>
              <ButtonPill type="submit" onClick={() => onSubmit}>
                Cadastrar
              </ButtonPill>
            </CardHomeFormFooter>
          </>
        )}
      </CardHomeForm>
      <CardHomeActions>
        <ButtonUnderlined onClick={() => navigate('/')}>
          Acessar minha conta
        </ButtonUnderlined>
      </CardHomeActions>
      {loading && <LoadingPage>Loading...</LoadingPage>}
    </>
  );
}
