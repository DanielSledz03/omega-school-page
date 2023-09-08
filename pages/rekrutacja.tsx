import { Fragment, useRef } from 'react';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import RecruitmentForm from '../components/RecruitmentForm/RecruitmentForm';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/bgRecruitmentDesktop.jpg';
import BgMobile from '../public/assets/headers/bgRecruitmentMobile.jpg';
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Zapisz dziecko"
        titleSpan=" do naszej szkoły"
        paragraph="Wypełnij formularz on-line i zapisz swoje dziecko do naszej szkoły, bez wychodzenia z
          domu."
        buttonTitle="Wypełnij formularz"
        onClick={executeScroll}
      />
      <div
        ref={ref}
        className="w-full flex flex-col py-10 px-5 md:mx-8 md:w-auto xl:mx-[110px] 2xl:mx-auto 2xl:px-[200px] max-w-[1920px]"
      >
        <RecruitmentForm />
      </div>
    </Fragment>
  );
}
