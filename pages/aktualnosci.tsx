import { createClient } from 'contentful';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { ArticlePreviewBox } from '../components/ArticlePreviewBox/ArticlePreviewBox';
import Button from '../components/Button/Button';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import EllipsesLeft from '../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../public/assets/EllipsesRight.svg';
import BgDesktop from '../public/assets/headers/bgNewsDesktop.jpg';
import BgMobile from '../public/assets/headers/bgNewsMobile.jpg';
import styles from '../styles/HomePage.module.css';

const Aktualnosci = ({ posts }: { posts: any }) => {
  const [howManyArticlesLoaded, setHowManyArticlesLoaded] = useState(5);
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
        title="Sprawdź,"
        titleSpan="co u nas słychać"
        paragraph="Przeczytaj wszystkie z naszych aktualności,
        aby być na bieżąco!"
        buttonTitle="Nasze aktualności"
        onClick={() => executeScroll()}
      />
      <div ref={ref} className={styles['content-box-news']}>
        <div className={styles['header2-container']}>
          <div className={styles['ellipses-left']}>
            <Image src={EllipsesLeft} alt="EllipsesLeft" />
          </div>
          <div className={styles['ellipses-right']}>
            <Image src={EllipsesRight} alt="EllipsesRight" />
          </div>
          <h2 className={styles.header2}>
            Zobacz, <br className="md:hidden" /> co się u nas dzieje
          </h2>
        </div>
        {posts
          .filter((post: any) => post.fields.pinned === true)
          .map((post: any) => {
            return (
              <ArticlePreviewBox
                shortDescription={post.fields.shortDescription}
                key={post.sys.id}
                id={post.sys.id}
                title={post.fields.title}
                content={post.fields.content}
                createdAt={post.sys.createdAt}
                imageSrc={'https:' + post.fields.mainImage.fields.file.url}
              />
            );
          })}
        {posts
          ?.filter((post: any) => post.fields.pinned === false)
          .map((post: any, index: number) => {
            if (howManyArticlesLoaded < index) return null;
            return (
              <ArticlePreviewBox
                shortDescription={post.fields.shortDescription}
                key={post.sys.id}
                id={post.sys.id}
                title={post.fields.title}
                content={post.fields.content}
                createdAt={post.sys.createdAt}
                imageSrc={'https:' + post.fields.mainImage.fields.file.url}
              />
            );
          })}
      </div>
      {howManyArticlesLoaded < posts.length && (
        <div className="w-full flex justify-center my-7 px-3 pb-[50px] max-w-[1920px] xl:pb-[100px] md:px-8 xl:px-[110px] 2xl:px-[200px]">
          <Button
            label="Zobacz więcej aktualności"
            onClick={() => setHowManyArticlesLoaded((prev) => prev + 5)}
            textColor="text-white"
            buttonColor="bg-[#FAC13C]"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Aktualnosci;

export async function getStaticProps() {
  const client = createClient({
    space: 'template_data',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'template_data',
  });

  const res = await client.getEntries({ content_type: 'post' });

  return {
    props: {
      posts: res.items,
    },
  };
}
