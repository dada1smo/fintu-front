import { useEffect, useState } from 'react';
import {
  AnchorMenu,
  BackdropMenu,
  ContainerMenu,
  ItemMenu,
  ListMenu,
} from '../styles/Menu.styles';

export default function Menu({ open, setOpen, items }) {
  return (
    <AnchorMenu>
      {open && (
        <>
          <BackdropMenu onClick={() => setOpen(!open)} />
          <ContainerMenu
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            <ListMenu>
              {items.map(({ label, action }) => {
                return (
                  <ItemMenu key={label} onClick={action}>
                    {label}
                  </ItemMenu>
                );
              })}
            </ListMenu>
          </ContainerMenu>
        </>
      )}
    </AnchorMenu>
  );
}
