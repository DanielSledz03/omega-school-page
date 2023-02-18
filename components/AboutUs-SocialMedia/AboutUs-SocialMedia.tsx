import Image from 'next/image'
import galleryImg1 from '../../public/assets/homepage/gallery/galleryImg1.svg'
import galleryImg2 from '../../public/assets/homepage/gallery/galleryImg2.svg'
import galleryImg3 from '../../public/assets/homepage/gallery/galleryImg3.svg'
import galleryImg4 from '../../public/assets/homepage/gallery/galleryImg4.svg'
import { SlideshowLightbox } from 'lightbox.js-react'
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg'
import EllipsesRight from '../../public/assets/EllipsesRight.svg'
import styles from './AboutUs-SocialMedia.module.css'
import Link from 'next/link'
const images = [
  { src: galleryImg1, alt: 'galleryImg1' },
  { src: galleryImg2, alt: 'galleryImg2' },
  { src: galleryImg3, alt: 'galleryImg3' },
  { src: galleryImg4, alt: 'galleryImg4' },
]

const AboutUs_SocialMedia = () => {
  return (
    <div className={styles['gallery-container']}>
      <div className={styles['header2-container']}>
        <div className={styles['ellipses-left']}>
          <Image src={EllipsesLeft} alt="EllipsesLeft" />
        </div>
        <div className={styles['ellipses-right']}>
          <Image src={EllipsesRight} alt="EllipsesRight" />
        </div>
        <h2 className={styles.header2}>Życie szkoły na Social Mediach</h2>
      </div>
      <SlideshowLightbox lightboxIdentifier="lightbox2" framework="next" images={images} fullScreen>
        <div className="pb-3 min-w-screen flex overflow-x-scroll mt-5 xl:overflow-x-hidden">
          {' '}
          {images &&
            images.map((image: any, index: number) => (
              <div key={index} className={styles['gallery-image']}>
                <Image
                  className="w-full"
                  src={image.src}
                  alt="Zdjęcie z galerii nr 1"
                  data-lightboxjs="lightbox2"
                />
              </div>
            ))}
          <Link
            target="_blank"
            className={styles['gallery-show-all-images']}
            href="https://www.facebook.com/zespolszkolomega"
          >
            Obserwuj nas na Facebooku
          </Link>
        </div>
      </SlideshowLightbox>
    </div>
  )
}

export default AboutUs_SocialMedia
