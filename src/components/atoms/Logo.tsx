import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <Image src="/icons/logo1.svg" width={22.384} height={19.023} alt="logo" />
      <Image src="/icons/logo2.svg" width={19.596} height={22.045} alt="logo" />
      <Image src="/icons/logo3.svg" width={22.384} height={18.762} alt="logo" />
      <Image src="/icons/logo4.svg" width={18.267} height={22.045} alt="logo" />
    </>
  )
}
