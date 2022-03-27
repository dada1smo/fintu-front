import {
  ButtonPill,
  ButtonUnderlined,
  PillButton,
} from '../styles/Button.styles';
import { Label } from '../styles/Typography.styles';
import { CardHomeActions, CardHomeForm } from '../styles/Home.styles';
import { Input, InputFlex } from '../styles/Input.styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AlertPositive } from '../styles/Alert.styles';
import { CheckIcon } from '../images/Icons';

export default function Register() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <CardHomeForm>
        <Label>Cadastro</Label>
        {isUserRegistered ? (
          <AlertPositive>
            <img src={CheckIcon} alt="" />
            Usuário cadastrado com sucesso
          </AlertPositive>
        ) : (
          <>
            <InputFlex>
              <Input type="text" placeholder="Usuário" />
              <Input type="text" placeholder="E-mail" />
            </InputFlex>
            <InputFlex>
              <Input type="password" placeholder="Senha" />
              <Input type="password" placeholder="Confirme sua senha" />
            </InputFlex>
          </>
        )}
      </CardHomeForm>
      <CardHomeActions>
        {!isUserRegistered && (
          <ButtonPill onClick={() => setIsUserRegistered(!isUserRegistered)}>
            Cadastrar
          </ButtonPill>
        )}
        <ButtonUnderlined onClick={() => navigate('/')}>
          Acessar minha conta
        </ButtonUnderlined>
      </CardHomeActions>
    </>
  );
}
