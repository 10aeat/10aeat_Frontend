import Image from 'next/image'

export default function AdminLogo() {
  return (
    <div className=" flex w-full h-[72px] px-[0px] py-[6px] items-center gap-[8px] border-b border-solid border-gray-400">
      <div className="flex px-[24px] py-0 gap-[3px] items-center !w-[145px] !h-[72px] !top-0 !left-0">
        <Image
          src="/icons/logo1.svg"
          width={30.461}
          height={25.887}
          alt="logo"
          className="!w-[30.461px] !h-[25.887px]"
        />
        <Image
          src="/icons/logo2.svg"
          width={26.667}
          height={30}
          alt="logo"
          className="!w-[26.667px] !h-[30px]"
        />
        <Image
          src="/icons/logo3.svg"
          width={30.461}
          height={25.532}
          alt="logo"
          className="!w-[30.461px] !h-[25.532px]"
        />
        <Image
          src="/icons/logo4.svg"
          width={24.858}
          height={30}
          alt="logo"
          className="!w-[24.858px] !h-[30px]"
        />
      </div>
    </div>
  )
}
