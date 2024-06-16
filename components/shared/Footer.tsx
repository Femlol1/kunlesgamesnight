import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={50}
            height={38}
            />
        </Link>
        <Link href={"https://www.youtube.com/@Kunlesgamesnight"}>
        <Image
            src="/assets/icons/youtube.svg"
            alt="logo"
            width={50}
            height={38}
            />
        </Link>
        <Link href={"https://www.instagram.com/kunlesgamesnight/"}>
        <Image
            src="/assets/icons/instagram.svg"
            alt="logo"
            width={30}
            height={38}
            />
            </Link>
        <Link href={"https://twitter.com/KGN_official_"}>
        <Image
            src="/assets/icons/twitter.svg"
            alt="logo"
            width={50}
            height={38}
            /></Link>
        <Link href={"https://www.facebook.com/profile.php?id=100095073176779"}>
        <Image
            src="/assets/icons/facebook.svg"
            alt="logo"
            width={50}
            height={38}
            /></Link>
        <p>2023 KunlesGamesNight. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer