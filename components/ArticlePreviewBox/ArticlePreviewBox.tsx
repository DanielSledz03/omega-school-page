import Image from 'next/image'
import PostImage from '../../public/postImage.svg'
import Button from '../Button/Button'
import styles from './ArticlePreviewBox.module.css'

interface IProps {
  title: string
  content: string
  createdAt: string
}

export const ArticlePreviewBox = ({ title, content, createdAt }: IProps) => {
  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <Image className={styles.image} src={PostImage} alt="PostImage" />
      </div>
      <div className={styles['content-box']}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.content}>{content}</p>
        <p className={styles['created-at']}>Dodano: 02.02.2023</p>
        <Button
          label="Czytaj całość"
          onClick={() => null}
          buttonColor="bg-[#579CE2]"
          textColor="text-white"
          className={styles['button-read']}
        />
      </div>
    </div>
  )
}
