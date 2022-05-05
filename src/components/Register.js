import { ButtonPill, ButtonUnderlined } from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import {
  CardHomeActions,
  CardHomeForm,
  CardHomeFormFooter,
} from '../styles/Home.styles';
import { Input, FormFlex } from '../styles/Form.styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AlertNegative, AlertPositive } from '../styles/Alert.styles';
import { CheckIcon, ErrorIcon } from '../images/Icons';
import useUser from '../providers/user.provider';
import { useForm } from 'react-hook-form';
import { LoadingPage } from './Loading';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from '../yup';
import { FormFieldText } from './FormField';

const validationSchema = yup.object({
  username: yup
    .string()
    .label('Nome de usuário')
    .min(6)
    .max(12)
    .required()
    .matches(
      /^[a-z0-9_-]{3,15}$/,
      'Nome de usuário deve ser composto de letras e números'
    ),
  email: yup.string().label('E-mail').email().required(),
  password: yup.string().label('Senha').required(),
  passwordConfirm: yup.string().label('Senha'),
});

export default function Register() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
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
            <FormFlex>
              <FormFieldText
                type="text"
                label="Nome de usuário"
                placeholder="Nome de usuário"
                name="username"
                register={register}
                errors={errors}
              />
              <FormFieldText
                type="text"
                label="E-mail"
                placeholder="E-mail"
                name="email"
                register={register}
                errors={errors}
              />
            </FormFlex>
            <FormFlex>
              <FormFieldText
                type="password"
                label="Senha"
                placeholder="Senha"
                name="password"
                register={register}
                errors={errors}
              />
              <FormFieldText
                type="password"
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                name="passwordConfirm"
                register={register}
                errors={errors}
              />
            </FormFlex>
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
          Ir para login
        </ButtonUnderlined>
      </CardHomeActions>
      {loading && <LoadingPage>Loading...</LoadingPage>}
    </>
  );
}
