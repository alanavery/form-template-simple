import Header from './Header';
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Form Templates</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
