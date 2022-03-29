import { ArrowDownIcon } from '../images/Icons';
import {
  BackdropSelect,
  ContainerSelect,
  DropdownSelect,
  ItemSelect,
  ListSelect,
} from '../styles/Select.styles';

export default function Select({ initialValue, open, setOpen, items }) {
  return (
    <>
      <DropdownSelect open={open} onClick={() => setOpen(!open)}>
        {initialValue} <ArrowDownIcon />
        {open && (
          <ContainerSelect>
            <ListSelect>
              {items.map(({ label, action }) => {
                return (
                  <ItemSelect key={label} onClick={action}>
                    {label}
                  </ItemSelect>
                );
              })}
            </ListSelect>
          </ContainerSelect>
        )}
      </DropdownSelect>
      {open && <BackdropSelect onClick={() => setOpen(!open)} />}
    </>
  );
}
