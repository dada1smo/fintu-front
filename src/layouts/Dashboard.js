import { Wrapper } from '../styles/Layout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import useUser from '../providers/user.provider';
import Modal from '../components/Modal';
import { useEffect } from 'react';
import {
  ContainerModalContent,
  ContainerModalFooter,
} from '../styles/Modal.styles';
import { ButtonPill } from '../styles/Button.styles';
import { Value, H4, Parapraph } from '../styles/Typography.styles';

export default function Dashboard() {
  const { pathname } = useLocation();
  const { handleOnboarding, showOnboarding, setShowOnboarding } = useUser();

  return (
    <>
      <Wrapper dashboard={pathname.includes('/dashboard')}>
        <Sidebar />
        <Outlet />
      </Wrapper>
      <Modal
        open={showOnboarding}
        setOpen={setShowOnboarding}
        title="Como funciona"
      >
        <ContainerModalContent>
          <H4>1. Itens financeiros</H4>
          <Parapraph>
            A Fintu se baseia em "Itens financeiros", valores de Entrada
            (dinheiro recebido) ou Saída (dinheiro gasto). Você pode criar e
            nomear esses itens, visualizá-los por mês e por categoria. Assim,
            você consegue entender o dinheiro que entra e o dinheiro que sai, e
            como melhor organizar suas finanças.
          </Parapraph>
          <H4>2. Economias</H4>
          <Parapraph>
            Na opção "Economias" disponível no menu lateral esquerdo, você pode
            adicionar itens que fazem parte da sua reserva financeira ou
            poupança.
          </Parapraph>
          <Parapraph>
            O "Balanço" que aparece logo antes de Economias é o produto de todas
            as economias com todos os itens financeiros que você já adicionou.
          </Parapraph>
          <H4>3. Categorias</H4>
          <Parapraph>
            Também no menu lateral você encontra a opção "Categorias", onde pode
            adicionar, editar ou remover categorias para seus itens financeiros.
            Para te ajudar, já criamos algumas, mas elas também pode ser
            editadas ou removidas.
          </Parapraph>
          <H4>4. Itens recorrentes</H4>
          <Parapraph>
            Sabe aqueles valores que se repetem todo mês? Por exemplo, seu
            salário ou uma assinatura de streaming. Ao adicionar um novo item,
            você pode marcar ele como "Recorrente" e ele vai se repetir até você
            decidir "Encerrar a recorrência".
          </Parapraph>
        </ContainerModalContent>
        <ContainerModalFooter>
          <ButtonPill onClick={() => handleOnboarding()}>Entendi</ButtonPill>
        </ContainerModalFooter>
      </Modal>
    </>
  );
}
