import Header from './Header';
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Form Templates</title>
        <meta name="description">This is a collection of form templates, which can be used for various projects.</meta>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
