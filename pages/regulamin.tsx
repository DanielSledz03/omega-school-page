import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Regulamin = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('regulamin.pdf')
  }, [])

  return (
    <a href="regulamin.pdf" target="_blank">
      Regulamin
    </a>
  )
}

export default Regulamin
