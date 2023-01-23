import Image from 'next/image'
import { useRouter } from 'next/router'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import PostImage from '../../public/postImage.svg'
import Button from '../Button/Button'
import styles from './ArticlePreviewBox.module.css'

interface IProps {
  id: string
  title: string
  content: string
  createdAt: string
  imageSrc: string
}

export const ArticlePreviewBox = ({ title, content, createdAt, id, imageSrc }: IProps) => {
  const router = useRouter()

  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <Image
          quality={100}
          className={styles.image}
          src={imageSrc}
          width={100}
          height={200}
          alt="PostImage"
        />
      </div>
      <div className={styles['content-box']}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.content}>{content.slice(0, 200)}</p>
        <Button
          label="Czytaj całość"
          onClick={() => router.push('/aktualnosci/' + id)}
          buttonColor="bg-[#579CE2]"
          textColor="text-white"
          className={styles['button-read']}
        />
        <p className={styles['created-at']}>Dodano: 02.02.2023</p>
      </div>
    </div>
  )
}
