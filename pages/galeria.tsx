import { Fragment, useState, useRef, useEffect } from 'react'
import { PageHeader } from '../components/PageHeader.tsx/PageHeader'
import BgDesktop from '../public/assets/headers/BgGalleryDesktop.jpg'
import BgMobile from '../public/assets/headers/bgGalleryMobile.jpg'
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles'
import GalleryBox from '../components/GalleryBox/GalleryBox'
import { GalleryData } from '../data/galleryData'
import BackButton from '../public/assets/gallery/backButton.png'
import Image from 'next/image'
import { SlideshowLightbox } from 'lightbox.js-react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { createClient } from 'contentful'

const Galeria = ({ gallery }: any) => {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [galleryImages, setGalleryImages] = useState<any>([])
  const ref = useRef<any>(null)
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

  useEffect(() => {
    if (selectedItem)
      setGalleryImages(
        selectedItem.fields.gallery.map((image) => {
          return {
            src: 'http:' + image.fields.file.url,
            alt: 'obrazek',
          }
        }),
      )
  }, [selectedItem])

  console.log(gallery[0].fields.gallery[0].fields.file.url)

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Zobacz naszą"
        titleSpan="galerię zdjęć"
        paragraph="Zobacz zdjęcia z najważniejszych wydarzeń w naszej szkole."
        buttonTitle="Zobacz zdjęcia"
        onClick={executeScroll}
      />
      <main ref={ref} className="px-5 pb-8 md:px-8 md:pb-12 md:mt-8 xl:px-[110px] 2xl:px-[180px]">
        <HeaderWithBubbles header="Galeria zdjęć" />
        {!selectedItem && (
          <div className="md:mt-12 xl:flex xl:flex-wrap xl:justify-evenly">
            {gallery.map((data, index) => (
              <GalleryBox
                onClick={() => {
                  setSelectedItem(data)
                  executeScroll()
                }}
                thumbnail={'http:' + gallery[0].fields.thumbnail.fields.file.url}
                key={index}
                header={data.fields.title}
              />
            ))}
          </div>
        )}

        {selectedItem && (
          <div className="w-full mt-4 md:mt-8">
            <div className="border-y-[1px] border-[#F0F0F0] py-3 px-1 flex justify-between items-center">
              <div
                onClick={() => {
                  setSelectedItem(null)
                }}
                className="w-[40px] h-[40px] rounded-[10px] bg-[#FAFAFA] flex justify-center items-center p-3"
              >
                <Image src={BackButton} alt="BackButton" />
              </div>
              <p className="text-[#579CE2] font-bold text-end md:text-[20px]">
                {selectedItem.fields.title}
              </p>
            </div>
            <SlideshowLightbox
              lightboxIdentifier="lightbox1"
              framework="next"
              images={galleryImages}
              fullScreen
            >
              <div className="flex flex-wrap justify-between my-4">
                {galleryImages &&
                  galleryImages.map((image: any, index: number) => (
                    <div
                      key={index}
                      className="w-[48%] h-[145px] rounded-[15px] overflow-hidden mb-2 md:h-[200px] md:mb-6"
                    >
                      <Image
                        width={500}
                        height={300}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={image.src}
                        alt={image.alt}
                        data-lightboxjs="lightbox1"
                      />
                    </div>
                  ))}
              </div>
            </SlideshowLightbox>
          </div>
        )}
      </main>
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: 'template_data',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'template_data',
  })

  const res = await client.getEntries({ content_type: 'gallery' })

  return {
    props: {
      gallery: res.items,
    },
  }
}

export default Galeria
