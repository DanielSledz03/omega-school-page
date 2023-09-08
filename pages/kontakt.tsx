import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import ContactData from '../components/ContactData/ContactData';
import ContactHeaderWithMap from '../components/ContactHeaderWithMap/ContactHeaderWithMap';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/bgContactDesktop.jpg';
import BgMobile from '../public/assets/headers/bgContactMobile.jpg';

const Kontakt = () => {
  const { width } = useWindowDimensions();
  const Map = useMemo(
    () =>
      dynamic(() => import('../components/Map/Map'), {
        loading: () => <p>Ładowanie mapy...</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <Fragment>
      <PageHeader
        titleSpanColor="white"
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Zapraszamy"
        titleSpan="do nas"
        paragraph="Jeśli masz jakiekolwiek pytania, zachęcamy do kontaktu
        lub odwiedzenia nas osobiście w placówce."
        buttonTitle="Odwiedź nas"
        onClick={() => null}
      />
      <main className="px-5 py-8 pb-[50px] md:px-8 md:py-12 xl:px-[110px] xl:pb-[100px] 2xl:px-[180px]">
        <ContactHeaderWithMap />
        <div className="xl:flex">
          <ContactData />
          {width >= 1280 && <Map />}
        </div>
        {width >= 1280 && (
          <div className="w-full flex flex-col items-center justify-center text-[#071E4A] border-t-[1px] border-[#F0F0F0] py-6 text-center mt-8">
            <h5 className="text-[#579CE2] text-[25px] font-bold mb-3 md:text-[30px] xl:text-[35px]">
              Finanse
            </h5>
            <div className="mb-3 md:text-[20px] xl:text-[25px]">
              <p>
                tel. <span className="font-bold">535 316 740</span>
              </p>
              <p>
                mail: <span className="font-bold">finanse@omegaszkola.pl</span>
              </p>
              <p>
                ING Bank Śląski:{' '}
                <span className="font-bold">
                  76 1050 1214 1000 0022 4195 7121
                </span>
              </p>
            </div>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default Kontakt;
