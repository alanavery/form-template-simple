import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/forms">
              <a>Forms</a>
            </Link>
            <ul>
              <li>
                <Link href="/forms/basic">
                  <a>Basic</a>
                </Link>
              </li>
              <li>
                <Link href="/forms/formik">
                  <a>Formik</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
