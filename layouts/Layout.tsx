import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import { ProductActionContextProvider } from '@context/ProductActionContext';
import { ShoppingCartContextProvider } from '@context/ShoppingCartContext';
import { SidebarContextProvider } from '@context/SidebarContext';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ProductActionContextProvider>
      <ShoppingCartContextProvider>
        <SidebarContextProvider>
          <Header />
          <Sidebar />
        </SidebarContextProvider>
        <main className='flex flex-col items-center justify-center bg-[#ebebeb]'>
          {children}
        </main>
        <footer></footer>
      </ShoppingCartContextProvider>
    </ProductActionContextProvider>
  </>
);

export { Layout };
