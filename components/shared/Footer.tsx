import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-grey-200 bg-white text-dark-50">
      <div className="flex wrapper items-center justify-between flex-wrap p-5 text-center sm:text-left">
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="KunlesGamesNight logo"
            width={50}
            height={38}
          />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link href={"https://www.youtube.com/@Kunlesgamesnight"}>
            <Image
              src="/assets/icons/youtube.svg"
              alt="YouTube"
              width={50}
              height={38}
            />
          </Link>
          <Link href={"https://www.instagram.com/kunlesgamesnight/"}>
            <Image
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              width={30}
              height={38}
            />
          </Link>
          <Link href={"https://twitter.com/KGN_official_"}>
            <Image
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              width={50}
              height={38}
            />
          </Link>
          <Link href={"https://www.facebook.com/profile.php?id=100095073176779"}>
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={50}
              height={38}
            />
          </Link>
        </div>
        <p className="w-full sm:w-auto mt-4 sm:mt-0">2023 KunlesGamesNight. All Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
