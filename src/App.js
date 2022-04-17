import { GlobalStyles } from './styles/GlobalStyles.styles';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { UserProvider } from './providers/user.provider';
import AppRouter from './components/AppRouter';
import { FinancesProvider } from './providers/finances.provider';

function App() {
  return (
    <UserProvider>
      <FinancesProvider>
        <GlobalStyles />
        <AppRouter />
      </FinancesProvider>
    </UserProvider>
  );
}

export default App;
