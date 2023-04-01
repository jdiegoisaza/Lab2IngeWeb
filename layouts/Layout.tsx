import { Header } from '@components/Header';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <footer></footer>
  </>
);

export { Layout };
