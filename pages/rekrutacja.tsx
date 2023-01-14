import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Rekrutacja = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <a href="" target="_blank" rel="noreferrer">
      Rekrutacja
    </a>
  )
}

export default Rekrutacja
