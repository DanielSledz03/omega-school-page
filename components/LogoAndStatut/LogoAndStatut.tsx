import Image from 'next/image'
import Logo from '../../public/assets/about/logo.jpg'
import BookIcon from '../../public/assets/about/bookIcon.svg'
import RightWhiteArrow from '../../public/assets/about/RightWhiteArrow.svg'
import { useRouter } from 'next/router'

const LogoAndStatut = () => {
  const router = useRouter()
  return (
    <div className="pt-5 flex flex-col items-center xl:pt-8">
      <div className="w-3/4 flex justify-center">
        <Image src={Logo} alt="Logo szkoły" />
      </div>

      <h2 className="mt-5 text-[#071E4A] text-[25px] leading-[30px] text-center font-bold xl:text-[45px] xl:leading-[54px] xl:mt-10">
        Społeczna Szkoła Podstawowa - OMEGA w Katowicach
      </h2>

      <div
        onClick={() => router.push('/statut.pdf')}
        className="w-full bg-[#579CE2] p-5 rounded-[25px] my-8 flex items-center justify-between xl:rounded-[50px] xl:justify-center xl:w-4/5 xl:py-3 2xl:w-1/2"
      >
        <div className="w-1/6 xl:w-auto">
          <Image src={BookIcon} alt="Książka" />
        </div>
        <p className="font-bold text-white flex-1 text-center md:text-[18px] xl:flex-none xl:mx-8 xl:text-[25px]">
          Pobierz i zapoznaj się ze statutem szkoły
        </p>
        <div className="w-1/6 flex justify-end xl:w-auto">
          <Image src={RightWhiteArrow} alt="Strzałka" />
        </div>
      </div>
    </div>
  )
}

export default LogoAndStatut
