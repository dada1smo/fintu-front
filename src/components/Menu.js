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
          <ContainerMenu>
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
