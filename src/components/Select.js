import { ArrowDownIcon } from '../images/Icons';
import {
  BackdropSelect,
  ContainerSelect,
  DropdownSelect,
  ItemSelect,
  ListSelect,
} from '../styles/Select.styles';
import Category from './Category';

export default function Select({
  initialValue,
  open,
  setOpen,
  items,
  selectedComponent,
}) {
  const selectedCategory = (
    <Category
      title={selectedComponent?.title}
      color={selectedComponent?.color}
    />
  );

  return (
    <>
      <DropdownSelect open={open} onClick={() => setOpen(!open)}>
        {selectedComponent ? selectedCategory : initialValue} <ArrowDownIcon />
        {open && (
          <ContainerSelect
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            <ListSelect>
              {items.map(({ label, action, component }) => {
                return (
                  <ItemSelect key={label} onClick={action}>
                    {component ? component : label}
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
