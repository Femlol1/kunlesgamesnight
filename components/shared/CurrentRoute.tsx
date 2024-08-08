"use client"
import { userHeaderLink } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const CurrentRoute = () => {
    const pathname = usePathname();
    const currentLink = userHeaderLink.find(link => pathname === link.route);
  return (
    <SignedOut >
        <div className={'md:hidden text-primary flex-center font-bold whitespace-nowrap'} >{currentLink && currentLink.label}</div>  
    </SignedOut>  )
}

export default CurrentRoute