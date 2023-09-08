import Image from 'next/image';
import styles from './ImagePreview.module.css';
import CloseIcon from '../../public/assets/news/closeIcon.svg';
import LeftArrow from '../../public/assets/news/leftArrow.svg';
import RightArrow from '../../public/assets/news/rightArrow.svg';

interface IProps {
  clickedImageID: number;
  post: any;
  setisModalVisible: any;
  setClickedImageID: any;
}

const ImagePreview = ({
  clickedImageID,
  post,
  setisModalVisible,
  setClickedImageID,
}: IProps) => {
  const handleNextImage = () => {
    if (clickedImageID !== post.fields.gallery.length - 1) {
      setClickedImageID((prev: number) => prev + 1);
    } else {
      setClickedImageID(0);
    }
  };

  const handlePreviousImage = () => {
    if (clickedImageID !== 0) {
      setClickedImageID((prev: number) => prev - 1);
    } else {
      setClickedImageID(post.fields.gallery.length - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['inner-wrapper']}>
        <Image
          key={post.fields.gallery[clickedImageID].fields.file.url}
          alt="Zdjęcie związazne z wpisem"
          width={1920}
          height={1200}
          src={'https:' + post.fields.gallery[clickedImageID].fields.file.url}
          className={styles.image}
        />
        <div
          onClick={() => setisModalVisible(false)}
          className={styles['close-icon-container']}
        >
          <Image src={CloseIcon} alt="CloseIcon" />
        </div>
        <div className={styles['arrows-container']}>
          <div onClick={handlePreviousImage} className={styles['left-arrow']}>
            <Image src={LeftArrow} alt="LeftArrow" />
          </div>

          <div onClick={handleNextImage} className={styles['right-arrow']}>
            <Image src={RightArrow} alt="RightArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
