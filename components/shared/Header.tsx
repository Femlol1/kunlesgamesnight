import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileNav from "./MobileNav"
import NavItems from "./NavItems"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="flex wrapper items-center justify-between w-full">
            <Link href={"/"} className="w-36">
            <Image src={"/assets/images/logo.png"} width={50} height={38}
            alt="KunlesGamesNight logo"/>
            </Link>
            <SignedIn>
                <nav className="md:flex-between hidden w-full max-w-xs">
                    <NavItems />
                </nav>
            </SignedIn>
            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"></UserButton>
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size={"lg"}>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header