import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import styles from './ContactHeaderWithMap.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const ContactHeaderWithMap = () => {
  const { width } = useWindowDimensions();
  const Map = useMemo(
    () =>
      dynamic(() => import('../Map/Map'), {
        loading: () => <p>Ładowanie mapy...</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <div className={styles.container}>
      <h2 className={styles['header-text']}>
        Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w
        Katowicach
      </h2>
      {width < 1280 && <Map />}
    </div>
  );
};

export default ContactHeaderWithMap;
