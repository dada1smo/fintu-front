import {
  CardMonth,
  ContainerMonths,
  ContainerSelect,
  MenuSelect,
} from '../styles/Dashboard.styles';
import months from '../mocks/months.json';
import { Input } from '../styles/Input.styles';
import { ButtonPill } from '../styles/Button.styles';
import Menu from './Menu';
import { ArrowDownIcon, MenuHorizontalIcon } from '../images/Icons';
import { useState } from 'react';
import { DropdownSelect } from '../styles/Select.styles';
import Select from './Select';
import { Skeleton } from './Loading';

function Month({ month, name }) {
  return (
    <CardMonth>
      {month} - {name}
    </CardMonth>
  );
}

export default function Months() {
  const [yearSelectMenuOpen, setYearSelectMenuOpen] = useState();

  const userActions = [
    {
      label: '2021',
      action: () => {
        console.log('saí');
        setYearSelectMenuOpen(!yearSelectMenuOpen);
      },
    },
    {
      label: '2023',
      action: () => {
        console.log('saí');
        setYearSelectMenuOpen(!yearSelectMenuOpen);
      },
    },
  ];

  return (
    <ContainerMonths>
      <ContainerSelect>
        <Select
          initialValue={2022}
          open={yearSelectMenuOpen}
          setOpen={setYearSelectMenuOpen}
          items={userActions}
        />
      </ContainerSelect>
      {months.map(({ month, name }) => {
        return <Month key={month} month={month} name={name} />;
      })}
    </ContainerMonths>
  );
}
