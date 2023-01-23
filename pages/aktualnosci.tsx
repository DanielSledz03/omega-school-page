import { createClient } from 'contentful'
import Image from 'next/image'
import { Fragment, useRef } from 'react'
import { ArticlePreviewBox } from '../components/ArticlePreviewBox/ArticlePreviewBox'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import useWindowDimensions from '../hooks/useWindowDimensions'
import EllipsesLeft from '../public/assets/EllipsesLeft.svg'
import EllipsesRight from '../public/assets/EllipsesRight.svg'
import styles from '../styles/HomePage.module.css'

const Aktualnosci = ({ posts }: { posts: any }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useWindowDimensions()

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop! -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      })
  }
  return (
    <Fragment>
      <PageHeader
        bgUrl="bg-[url(/assets/headers/bgNewsMobile.svg)]"
        bgXlUrl="xl:bg-[url(/assets/headers/bgNewsDesktop.svg)]"
        title="Sprawdź,"
        titleSpan="co u nas słychać"
        paragraph="Przeczytaj wszystkie z naszych aktualności,
        aby być na bieżąco!"
        buttonTitle="Nasze aktualności"
        onClick={() => executeScroll()}
        bgClassStyle={styles['news-bg']}
      />
      <div ref={ref} className={styles['content-box']}>
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
              id={post.sys.id}
              title={post.fields.title}
              content={post.fields.content.content[0].content[0].value}
              createdAt={post.sys.createdAt}
              imageSrc={'https:' + post.fields.gallery[0].fields.file.url}
            />
          )
        })}
      </div>
    </Fragment>
  )
}

export default Aktualnosci

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
