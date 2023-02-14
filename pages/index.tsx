import { Fragment, useRef } from 'react'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import styles from '../styles/HomePage.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ArticlePreviewBox } from '../components/ArticlePreviewBox/ArticlePreviewBox'
import Button from '../components/Button/Button'
import AboutUsMobile from '../public/assets/homepage/aboutUsMobile.svg'
import EllipsesLeft from '../public/assets/EllipsesLeft.svg'
import EllipsesRight from '../public/assets/EllipsesRight.svg'
import { createClient } from 'contentful'
import BgDesktop from '../public/assets/headers/bgHomeDesktop.jpg'
import BgMobile from '../public/assets/headers/bgHomeMobile.jpg'
import Link from 'next/link'
import HomePageGallery from '../components/HomePageGallery/HomePageGallery'

export default function Home({ posts }: { posts: any }) {
  const router = useRouter()

  return (
    <Fragment>
      <div className="hidden xl:flex fixed bottom-0 w-full h-[80px] bg-white z-[90] flex items-center justify-center 2xl:h-[100px]">
        <Link
          href="/rekrutacja"
          className="text-center text-[#579CE2] text-[20px] underline font-[700]"
        >
          Rekrutacja na rok 2023 trwa, zapisz swoje dziecko już dziś!
        </Link>
        <Button
          label="Wypełnij formularz"
          buttonColor="bg-[#579CE2]"
          textColor="text-[white]"
          className={styles['button-modal-recrutation']}
          onClick={() => router.push('/rekrutacja')}
        />
      </div>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Kreuj z nami"
        titleSpan="swoją przyszłość"
        paragraph="Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach"
        buttonTitle="Rekrutacja do szkoły"
        onClick={() => router.push('/rekrutacja')}
        checkKindergarten
        textContainerStyles={styles['text-container']}
      />
      <div className={styles['content-box']}>
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
            )
          })}
        {posts
          ?.filter((post: any) => post.fields.pinned === false)
          .map((post: any, index: number) => {
            if (1 < index) return null
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
            )
          })}
        <Button
          label="Zobacz wszystkie aktualności"
          onClick={() => router.push('/aktualnosci')}
          textColor="text-white"
          className={styles['button-all-posts']}
          buttonColor="bg-[#FAC13C]"
        />
        <div className={styles['about-us-container']}>
          <div className={styles['about-us-image']}>
            <Image
              className="w-full md:w-1/2 md:mx-auto xl:w-full"
              src={AboutUsMobile}
              alt="O nas"
            />
          </div>

          <div className={styles['about-us-text-container']}>
            <h4 className={styles['about-us-header-text']}>
              Społeczna Szkoła <br className="hidden xl:block" /> Podstawowa OMEGA
              <br className="hidden xl:block" /> w Katowicach
            </h4>
            <p className={styles['about-us-paragraph']}>
              Idealna szkoła… To nie tylko certyfikaty i wysoki poziom nauczania. Tego nie brakuje
              większości placówek edukacyjnych. W końcu ich rolą jest udoskonalanie własnych
              systemów zarządzania jakością pracy i stałe podnoszenie poziomu oferowanych usług. Nie
              inaczej jest z „OMEGĄ” –{' '}
              <span>
                jesteśmy Szkoła z klasą, posiadamy certyfikat Szkoły Jakości, nasza kadra to
                prawdziwi Nauczyciele z klasą...
              </span>
            </p>
            <Button
              label="Dowiedz się o nas więcej"
              onClick={() => router.push('/o-nas')}
              textColor="text-white "
              className={styles['button-about-us']}
              buttonColor="bg-[#579CE2]"
            />
          </div>
        </div>
        <HomePageGallery />
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: 'template_data',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'template_data',
  })

  const res = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: res.items,
    },
  }
}
