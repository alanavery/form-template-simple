import Header from './Header';
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Form Templates</title>
        <meta name="description" content="This is a collection of form templates, which can be used for various projects." />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
