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
import { createClient, EntryCollection } from 'contentful'

export default function Home({ posts }: { posts: any }) {
  const router = useRouter()

  return (
    <Fragment>
      <PageHeader
        bgUrl="bg-[url(/assets/headers/bgHomeMobile.svg)]"
        bgXlUrl="xl:bg-[url(/assets/headers/bgHomeDesktop.svg)]"
        title="Kreuj z nami"
        titleSpan="swoją przyszłość"
        paragraph="Społeczna Szkoła Podstawowa OMEGA im. Górnośląskich Noblistów w Katowicach"
        buttonTitle="Rekrutacja do szkoły"
        onClick={() => router.push('/rekrutacja')}
        checkKindergarten
        textContainerStyles={styles['text-container']}
        bgClassStyle={styles['bg-style']}
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
        {posts?.map((post: any) => {
          return (
            <ArticlePreviewBox
              key={post.sys.id}
              title={post.fields.title}
              content={post.fields.content.content[0].content[0].value}
              createdAt={post.sys.createdAt}
            />
          )
        })}
        <Button
          label="Zobacz wszystkie aktualności"
          onClick={() => null}
          textColor="text-white"
          className={styles['button-all-posts']}
          buttonColor="bg-[#FAC13C]"
        />
        <div className={styles['about-us-container']}>
          <div className={styles['about-us-image']}>
            <Image className="w-full" src={AboutUsMobile} alt="O nas" />
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
              onClick={() => null}
              textColor="text-white "
              className={styles['button-about-us']}
              buttonColor="bg-[#579CE2]"
            />
          </div>
        </div>

        <div className={styles['gallery-container']}>
          <div className={styles['header2-container']}>
            <div className={styles['ellipses-left']}>
              <Image src={EllipsesLeft} alt="EllipsesLeft" />
            </div>
            <div className={styles['ellipses-right']}>
              <Image src={EllipsesRight} alt="EllipsesRight" />
            </div>
            <h2 className={styles.header2}>Galeria zdjęć</h2>
          </div>

          <p className={styles['gallery-paragraph']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo urna sed mattis
            congue. Etiam eu ultricies enim. Curabitur vel nisl purus.{' '}
          </p>
          {/* 
          <div className="w-[414px] flex overflow-x-scroll">
            <div className={styles['gallery-image']}>
              <Image className="w-full" src={galleryImg1} alt="Zdjęcie z galerii nr 1" />
            </div>
            <div className={styles['gallery-image']}>
              <Image className="w-full" src={galleryImg2} alt="Zdjęcie z galerii nr 1" />
            </div>
            <div className={styles['gallery-image']}>
              <Image className="w-full" src={galleryImg3} alt="Zdjęcie z galerii nr 1" />
            </div>
            <div className={styles['gallery-image']}>
              <Image className="w-full" src={galleryImg4} alt="Zdjęcie z galerii nr 1" />
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: 'l02hooqf2mkf',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'Vu9W2xQfTFEvCKQm0hdH6Ne-MYTM5Xu4A8-hefjpOpw',
  })

  const res = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: res.items,
    },
  }
}
