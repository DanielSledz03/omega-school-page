import Image from 'next/image'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
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
        <p className={styles.title}>{title}</p>
        <ReactMarkdown
          className={styles.content}
          components={{
            strong: ({ node, ...props }) => {
              return <strong className="font-[700]" {...props} />
            },
            a: ({ node, ...props }) => {
              return (
                <a
                  target="_blank"
                  className="text-[#579CE2] font-[700] m-0 p-0 underline"
                  {...props}
                />
              )
            },
            em: ({ node, ...props }) => {
              return <p className="italic inline-block" {...props} />
            },
          }}
        >
          {shortDescription}
        </ReactMarkdown>
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
