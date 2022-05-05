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
import useWindowSize from '../hooks/use-window-size';
import { ScreenSize } from '../styles/Breakpoints.styles';

export default function Home() {
  const { pathname } = useLocation();
  const screenSize = useWindowSize();

  return (
    <Wrapper>
      {screenSize.width > ScreenSize.tablet && (
        <BackgroundHome>
          <IllustrationHome />
        </BackgroundHome>
      )}

      <CardHome login={pathname === '/'}>
        <Logo src={logo} alt="Fintu" />
        <H1>O primeiro passo para sua saúde financeira</H1>
        <Subtitle>
          Fintu é sua aplicação de finanças pessoais e controle de gastos
        </Subtitle>

        <Outlet />
      </CardHome>
    </Wrapper>
  );
}
