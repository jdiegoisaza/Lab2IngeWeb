/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react';

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  amount?: number;
  discount?: number;
}

interface ProductActionContextProps {
  cartProducts: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (productId: string, removeAll: boolean) => void;
}

const ProductActionContext = createContext<ProductActionContextProps>(
  {} as ProductActionContextProps
);

export const useProductActionContext = () => useContext(ProductActionContext);

interface ProductActionContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ProductActionContextProvider = ({
  children,
}: ProductActionContextProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productInCart) {
      const newProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, amount: (cartProduct.amount ?? 0) + 1 };
        }
        return cartProduct;
      });

      return setCartProducts(newProducts);
    }

    setCartProducts((prev) => [...prev, { ...product, amount: 1 }]);
  };

  const removeProductFromCart = (productId: string, removeAll?: boolean) => {
    const product = cartProducts.find((product) => product.id === productId);
    if (!product) return;

    if (product.amount === 1 || removeAll) {
      return setCartProducts((prev) =>
        prev.filter((product) => product.id !== productId)
      );
    }

    const newProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.id === product.id) {
        return { ...cartProduct, amount: (cartProduct.amount ?? 0) - 1 };
      }
      return cartProduct;
    });

    return setCartProducts(newProducts);
  };

  return (
    <ProductActionContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ProductActionContext.Provider>
  );
};

export { ProductActionContextProvider };
