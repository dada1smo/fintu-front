import { H1, Subtitle } from '../styles/Typography.styles';
import { Wrapper } from '../styles/Layout.styles';
import {
  CardHome,
  IllustrationHome,
  BackgroundHome,
} from '../styles/Home.styles';
import logo from '../images/Logo.svg';
import { Outlet, useLocation } from 'react-router-dom';
import { Logo } from '../styles/Logo.styles';

export default function Home() {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <BackgroundHome>
        <IllustrationHome />
      </BackgroundHome>

      <CardHome login={pathname === '/'}>
        <Logo src={logo} alt="Fintu" />
        <H1>Boas-vindas à sua saúde financeira</H1>
        <Subtitle>
          Fintu é sua aplicação de finanças pessoais e controle de gastos
        </Subtitle>

        <Outlet />
      </CardHome>
    </Wrapper>
  );
}
