import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import { SidebarContextProvider } from '@context/SidebarContext';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <SidebarContextProvider>
      <Header />
      <Sidebar />
    </SidebarContextProvider>
    <main>{children}</main>
    <footer></footer>
  </>
);

export { Layout };
