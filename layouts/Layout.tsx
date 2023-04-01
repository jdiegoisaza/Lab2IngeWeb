interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <header></header>
    <main>{children}</main>
    <footer></footer>
  </>
);

export { Layout };
