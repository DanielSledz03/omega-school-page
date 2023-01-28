import { createClient } from 'contentful'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Arrow from '../../public/assets/rightArrow.svg'
import { Fragment, useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/HomePage.module.css'
import useOutsideClick from '../../hooks/useOutsideClick'
import CloseIcon from '../../public/assets/news/closeIcon.svg'
import RightArrow from '../../public/assets/news/rightArrow.svg'
import LeftArrow from '../../public/assets/news/leftArrow.svg'

export const getStaticPaths = async () => {
  const client = createClient({
    space: 'template_data',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'template_data',
  })
  const res = await client.getEntries({
    content_type: 'post',
  })

  const paths = res.items.map((item) => {
    return {
      params: { id: item.sys.id },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const client = createClient({
    space: 'template_data',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'template_data',
  })
  const { items } = await client.getEntries({
    content_type: 'post',
    'sys.id': params.id,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0], createdAtString: items[0].sys.createdAt },
    revalidate: 1,
  }
}

const ArtykulyDetail = ({ post, createdAtString }: any) => {
  const createdAt = new Date(createdAtString)
  const [clickedImageID, setClickedImageID] = useState<any>()
  const [isModalVisible, setisModalVisible] = useState(false)
  const router = useRouter()
  const ref = useRef<any>()
  useOutsideClick(ref, () => {
    setisModalVisible(false)
  })

  if (!post) return <div />

  return (
    <Fragment>
      {/* {isModalVisible && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[black] z-[1000] overflow-hidden ">
          <div className="flex justify-center items-center w-full h-full relative">
            <Image
              key={post.fields.gallery[clickedImageID].fields.file.url}
              alt="fotka"
              ref={ref}
              width={19200}
              height={1200}
              src={'https:' + post.fields.gallery[clickedImageID].fields.file.url}
              className="my-2 w-full px-2 object-contain xms:max-h-[450px] "
            />
            <div className="absolute top-[5px] right-[5px] text-white w-[50px] h-[50px] bg-white rounded-[20px] flex justify-center items-center">
              <Image src={CloseIcon} alt="CloseIcon" />
            </div>
            <div className="absolute bottom-[30px] flex justify-around w-full px-[50px] ">
              <div className=" text-white w-[50px] h-[50px] bg-white rounded-[20px] flex justify-center items-center">
                <Image src={LeftArrow} alt="LeftArrow" />
              </div>

              <div className="text-white w-[50px] h-[50px] bg-white rounded-[20px] flex justify-center items-center">
                <Image src={RightArrow} alt="RightArrow" />
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className="w-full max-w-[1920px] 3xl:mx-auto overflow-x-hidden">
        <Navbar className={styles['navbar']} />
        <div className="mt-[60px] py-3 px-3 md:mt-[100px] md:px-8 xl:px-[200px] 2xl:px-[250px] xl:mt-0 ">
          <div className="flex justify-between items-center pb-2 md:py-5">
            <div
              onClick={() => router.back()}
              className="w-[40px] h-[40px] bg-[#579CE2] rounded-full flex justify-center items-center p-2 md:w-[50px] md:h-[50px] xl:w-auto xl:px-4 hover:cursor-pointer "
            >
              <Image
                src={Arrow}
                alt="Strzłka"
                className="w-full h-full object-contain rotate-180"
              />
              <p className="hidden xl:block text-white mx-6">Wróć</p>
            </div>

            <p className="text-[#6D6D6D] text-[14px] md:text-[16px]">
              Dodano: {createdAt.toLocaleDateString()}
            </p>
          </div>
          <div>
            <Image
              key={post.fields.mainImage.fields.file.url}
              alt="fotka"
              width={1300}
              height={1140}
              src={'https:' + post.fields.mainImage.fields.file.url}
              className="my-2 w-full h-[140px] object-cover rounded-[10px] md:h-[200px] xl:h-[300px]"
            />
          </div>
          <h1 className="text-[#071E4A] font-bold text-[30px] leading-[35px] mt-5 mb-7 md:text-[50px] md:leading-[55px] md:mb-10 xl:text-[85px] xl:leading-[84px] xl:my-10">
            {post.fields.title}
          </h1>
          <p className="block w-full bg-[#FAFAFA] px-3 py-4 rounded-[25px] text-[#071E4A] leading-[24px] md:text-[20px] md:leading-[30px] xl:px-12 xl:py-8">
            {post.fields.content}
          </p>
          <div className="my-10 xl:flex xl:w-full xl:flex-wrap hover:cursor-pointer">
            {post.fields.gallery?.map((image: any, index: number) => (
              <Image
                key={image.fields.file.url}
                alt="fotka"
                onClick={() => {
                  setClickedImageID(index)
                  setisModalVisible(true)
                }}
                width={1300}
                height={1500}
                src={'https:' + image.fields.file.url}
                className="my-2 w-full h-[215px] object-cover rounded-[10px] md:mb-8 md:h-[300px] xl:w-1/3 xl:mb-4 xl:px-4 "
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ArtykulyDetail
