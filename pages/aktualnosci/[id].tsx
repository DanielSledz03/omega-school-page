import { createClient } from 'contentful';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import ImagePreview from '../../components/ImagePreview/ImagePreview';
import Navbar from '../../components/Navbar/Navbar';
import Arrow from '../../public/assets/rightArrow.svg';
import styles from '../../styles/HomePage.module.css';

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.SANITY_SPACE,
    environment: process.env.SANITY_ENVIRONMENT, // defaults toprocess.env.SANITY_ENVIRONMENT if not set
    accessToken: process.env.SANITY_TOKEN,
  });
  const res = await client.getEntries({
    content_type: 'post',
  });

  const paths = res.items.map((item) => {
    return {
      params: { id: item.sys.id },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const client = createClient({
    space: process.env.SANITY_SPACE,
    environment: process.env.SANITY_ENVIRONMENT, // defaults toprocess.env.SANITY_ENVIRONMENT if not set
    accessToken: process.env.SANITY_TOKEN,
  });
  const { items } = await client.getEntries({
    content_type: 'post',
    'sys.id': params.id,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0], createdAtString: items[0].sys.createdAt },
    revalidate: 1,
  };
};

const ArtykulyDetail = ({ post, createdAtString }: any) => {
  const createdAt = new Date(createdAtString);
  const [clickedImageID, setClickedImageID] = useState<any>();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!post) return <div />;

  return (
    <Fragment>
      <Navbar className={styles['navbar']} />

      <Head>
        <title>{post.fields.title}</title>
        <meta
          name="description"
          content={post.fields.shortDescription}
          key="desc"
        />
        <meta
          property="og:title"
          content={post.fields.title}
          key={'og-title'}
        />
        <meta
          property="og:description"
          content={post.fields.shortDescription}
          key={'og:description'}
        />
        <meta
          key={'og:image'}
          property="og:image"
          content={'https:' + post.fields.mainImage.fields.file.url}
        />
      </Head>

      {isModalVisible && (
        <ImagePreview
          clickedImageID={clickedImageID}
          setClickedImageID={setClickedImageID}
          setisModalVisible={setisModalVisible}
          post={post}
        />
      )}
      <div className="w-full max-w-[1920px] 3xl:mx-auto overflow-x-hidden">
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
          <p
            style={{ whiteSpace: 'pre-line' }}
            className="block w-full bg-[#FAFAFA] px-3 py-4 rounded-[25px] text-[#071E4A] leading-[24px] md:text-[20px] md:leading-[30px] xl:px-12 xl:py-8"
          >
            {domLoaded && (
              <ReactMarkdown
                components={{
                  strong: ({ node, ...props }) => {
                    return <strong className="font-[700]" {...props} />;
                  },
                  a: ({ node, ...props }) => {
                    return (
                      <a
                        target="_blank"
                        className="text-[#579CE2] font-[700] m-0 p-0 underline"
                        {...props}
                      />
                    );
                  },
                  em: ({ node, ...props }) => {
                    return <p className="italic inline-block" {...props} />;
                  },
                  br: ({ node, ...props }) => {
                    return <br {...props} />;
                  },
                }}
              >
                {post.fields.content}
              </ReactMarkdown>
            )}
          </p>
          <div className="my-10 xl:flex xl:w-full xl:flex-wrap hover:cursor-pointer">
            {post.fields.gallery?.map((image: any, index: number) => (
              <Image
                key={image.fields.file.url}
                alt="fotka"
                onClick={() => {
                  setClickedImageID(index);
                  setisModalVisible(true);
                }}
                width={500}
                height={400}
                src={'https:' + image.fields.file.url}
                className="my-2 w-full h-[215px] object-cover rounded-[10px] md:mb-8 md:h-[300px] xl:w-1/3 xl:mb-4 xl:px-4 "
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ArtykulyDetail;
