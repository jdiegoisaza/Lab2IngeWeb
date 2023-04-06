import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import { ShoppingCartContextProvider } from '@context/ShoppingCartContext';
import { SidebarContextProvider } from '@context/SidebarContext';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ShoppingCartContextProvider>
      <SidebarContextProvider>
        <Header />
        <Sidebar />
      </SidebarContextProvider>
      <main>{children}</main>
      <footer></footer>
    </ShoppingCartContextProvider>
  </>
);

export { Layout };
