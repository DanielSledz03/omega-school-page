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
  shortDescription: string
}

export const ArticlePreviewBox = ({
  title,
  content,
  createdAt,
  id,
  imageSrc,
  shortDescription,
}: IProps) => {
  const router = useRouter()
  const createdAtString = new Date(createdAt)

  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <Image
          quality={100}
          className={styles.image}
          src={imageSrc}
          width={1000}
          height={2000}
          alt="PostImage"
        />
      </div>
      <div className={styles['content-box']}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.content}>{shortDescription}</p>
        <Button
          label="Czytaj całość"
          onClick={() => router.push('/aktualnosci/' + id)}
          buttonColor="bg-[#579CE2]"
          textColor="text-white"
          className={styles['button-read']}
        />
        <p className={styles['created-at']}> Dodano: {createdAtString.toLocaleDateString()}</p>
      </div>
    </div>
  )
}
