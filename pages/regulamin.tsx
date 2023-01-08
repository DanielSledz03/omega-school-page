import { useRouter } from 'next/router'
import { useEffect } from 'react'
import RegulaminPDF from '../public/Regulamin.pdf'

const Regulamin = () => {
  const router = useRouter()
  useEffect(() => {
    router.push(RegulaminPDF)
  }, [])

  return (
    <a href="" target="_blank" rel="noreferrer">
      Regulamin
    </a>
  )
}

export default Regulamin
