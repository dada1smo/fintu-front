import {
  ButtonPill,
  ButtonUnderlined,
  PillButton,
} from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import { CardHomeActions, CardHomeForm } from '../styles/Home.styles';
import { Input } from '../styles/Input.styles';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <CardHomeForm>
        <Label>Login</Label>
        <Input type="text" placeholder="Usuário" />
        <Input type="password" placeholder="Senha" />
      </CardHomeForm>
      <CardHomeActions>
        <ButtonPill onClick={() => navigate('/dashboard')}>Entrar</ButtonPill>
        <ButtonUnderlined onClick={() => navigate('/register')}>
          Criar nova conta
        </ButtonUnderlined>
      </CardHomeActions>
    </>
  );
}
