import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps>(
  {} as SidebarContextProps
);

export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContextProvider };
