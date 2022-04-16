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

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login, username } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <CardHomeForm onSubmit={handleSubmit(onSubmit)}>
        <Label>Login</Label>
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
    </>
  );
}
