import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import CurrentRoute from "./CurrentRoute";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import UserMobileNav from "./UserMobileNav";
import UserNavItems from "./UserNavItems";

const Header = () => {
  return (
    <header className="w-full border-b border-grey-200 bg-white text-dark-50">
      <div className="flex wrapper items-center justify-between w-full">
        <Link href={"/"} className="w-36">
          <Image 
            src={"/assets/images/logo.png"} 
            width={50} 
            height={38} 
            alt="KunlesGamesNight logo"
          />
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <SignedOut>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <UserNavItems />
          </nav>
          <CurrentRoute/>
            {/* <Button asChild className="rounded-full" size={"lg"}>
              <Link href="/sign-in">Login</Link>
            </Button> */}
          </SignedOut>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <UserMobileNav/>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
