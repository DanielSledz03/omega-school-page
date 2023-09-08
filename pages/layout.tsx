import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>
          Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w
          Katowicach
        </title>
        <meta
          name="description"
          content="Społeczna Szkoła Podstawowa OMEGA w Katowicach"
          key="desc"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={'Społeczna Szkoła Podstawowa OMEGA'}
          key={'og-title'}
        />
        <meta
          property="og:description"
          content="Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach to szkoła z ponad 30 letnim doświadczeniem. Gwarantujemy najskuteczniejsze metody edukacji. Zapisz swoje dziecko już teraz!"
          key={'og:description'}
        />
        <meta
          key={'og:image'}
          property="og:image"
          content="/assets/homepage/aboutUsMobile.svg"
        />
      </Head>
      {width && width < 1280 && <Navbar />}
      <>{children}</>
      <Footer />
    </>
  );
}
