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
import Modal from '../components/Modal/Modal'
import useOutsideClick from '../hooks/useOutsideClick'

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
                  width < 1280 && executeScroll()
                }}
                thumbnail={'http:' + gallery[0].fields.thumbnail.fields.file.url}
                key={index}
                header={data.fields.title}
              />
            ))}
          </div>
        )}

        {width < 1280 && selectedItem && (
          <div className="w-full mt-4 md:mt-8">
            <div className="border-y-[1px] border-[#F0F0F0] py-3 px-1 flex justify-between items-center">
              <div
                onClick={() => {
                  setSelectedItem(null)
                  setGalleryImages([])
                }}
                className="w-[40px] h-[40px] rounded-[10px] bg-[#FAFAFA] flex justify-center items-center p-3"
              >
                <Image src={BackButton} alt="BackButton" />
              </div>
              <p className="text-[#579CE2] font-bold text-end md:text-[20px]">
                {selectedItem.fields.title}
              </p>
            </div>
            {selectedItem && galleryImages.length > 0 && (
              <SlideshowLightbox
                lightboxIdentifier={'lightbox' + galleryImages.length}
                framework="next"
                images={galleryImages}
              >
                <div className="flex flex-wrap justify-between my-4">
                  {galleryImages.length > 0 &&
                    galleryImages.map((image: any, index: number) => (
                      <div
                        key={image.alt}
                        className="w-[48%] h-[145px] rounded-[15px] overflow-hidden mb-2 md:h-[200px] md:mb-6"
                      >
                        <Image
                          width={500}
                          height={300}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          src={image.src}
                          alt={image.alt}
                          data-lightboxjs={'lightbox' + galleryImages.length}
                        />
                      </div>
                    ))}
                </div>
              </SlideshowLightbox>
            )}
          </div>
        )}

        {width >= 1280 && (
          <Modal title="sdds" show={selectedItem} onClose={() => setSelectedItem(null)}>
            {selectedItem && (
              <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center items-center">
                <div className="w-4/5 p-8 bg-white rounded-[15px]">
                  <div className="flex justify-between items-center border-y-[1px] border-[#F0F0F0] py-2">
                    <div
                      onClick={() => {
                        setSelectedItem(null)
                        setGalleryImages([])
                      }}
                      className="w-[40px] h-[40px] rounded-[10px] bg-[#FAFAFA] flex justify-center items-center p-3 hover:cursor-pointer"
                    >
                      <Image src={BackButton} alt="BackButton" />
                    </div>
                    <p className="text-[#579CE2] font-bold text-end md:text-[20px]">
                      {selectedItem.fields.title}
                    </p>
                  </div>
                  <div className="flex">
                    {galleryImages.length > 0 && (
                      <SlideshowLightbox
                        lightboxIdentifier={'lightbox' + galleryImages.length}
                        framework="next"
                        images={galleryImages}
                      >
                        <div className="flex flex-wrap my-4">
                          {galleryImages.length > 0 &&
                            galleryImages.map((image: any, index: number) => (
                              <div
                                key={image.alt}
                                className="	w-[20%] rounded-[15px] overflow-hidden h-[200px] md:mb-3 px-2"
                              >
                                <Image
                                  width={500}
                                  height={300}
                                  style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                  }}
                                  src={image.src}
                                  alt={image.alt}
                                  data-lightboxjs={'lightbox' + galleryImages.length}
                                />
                              </div>
                            ))}
                        </div>
                      </SlideshowLightbox>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Modal>
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
