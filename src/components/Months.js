import {
  CardMonth,
  ContainerMonths,
  ContainerSelect,
} from '../styles/Dashboard.styles';
import months from '../mocks/months.json';
import { Input } from '../styles/Input.styles';

function Month({ month, name }) {
  return (
    <CardMonth>
      {month} - {name}
    </CardMonth>
  );
}

export default function Months() {
  return (
    <ContainerMonths>
      <ContainerSelect>
        <Input type="text" />
      </ContainerSelect>
      {months.map(({ month, name }) => {
        return <Month key={month} month={month} name={name} />;
      })}
    </ContainerMonths>
  );
}
