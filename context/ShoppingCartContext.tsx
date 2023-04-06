import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ShoppingCartContextProps {
  openCartModal: boolean;
  setOpenCartModal: Dispatch<SetStateAction<boolean>>;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

interface ShoppingCartContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const [openCartModal, setOpenCartModal] = useState(false);
  return (
    <ShoppingCartContext.Provider
      value={{
        openCartModal,
        setOpenCartModal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContextProvider };
