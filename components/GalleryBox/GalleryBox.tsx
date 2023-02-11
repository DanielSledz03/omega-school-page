import Image from 'next/image'
import ImageFrom from '../../public/assets/image.png'

interface IProps {
  header: string
  thumbnail: any
  onClick: any
}

const GalleryBox = ({ header, thumbnail, onClick }: IProps) => {
  return (
    <div
      onClick={onClick}
      className="w-full rounded-[25px] my-5 relative h-[160px] overflow-hidden bg-[#071E4A]/80 flex justify-center items-center md:h-[260px] hover:cursor-pointer hover:bg-[#579CE2]/80 duration-300 xl:w-[32%] xl:mb-1"
    >
      <div className="absolute w-full h-full top-0 z-[-1]">
        <Image
          src={thumbnail}
          width={300}
          height={300}
          alt="ImageFrom"
          className="object-cover w-full h-full"
        />
      </div>

      <p className="text-white text-center text-[20px] xms:text-[25px] font-bold leading-[30px] md:text-[30px] md:leading-[40px]">
        {header}
      </p>
    </div>
  )
}

export default GalleryBox
