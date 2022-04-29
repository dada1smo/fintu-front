import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import useWindowSize from '../hooks/use-window-size';
import { ScreenSize } from '../styles/Breakpoints.styles';

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [responsiveSidebar, setResponsiveSidebar] = useState(true);

  const screenSize = useWindowSize();
  const location = useLocation();

  useEffect(() => {
    if (screenSize.width > ScreenSize.tablet) {
      setResponsiveSidebar(true);
    } else {
      setResponsiveSidebar(false);
    }
  }, [screenSize.width, location]);

  return (
    <SidebarContext.Provider
      value={{ responsiveSidebar, setResponsiveSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default function useSidebar() {
  const context = useContext(SidebarContext);

  return context;
}
