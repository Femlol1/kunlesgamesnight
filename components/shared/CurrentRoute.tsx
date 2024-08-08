"use client"
import { userHeaderLink } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const CurrentRoute = () => {
    const pathname = usePathname();
    const currentLink = userHeaderLink.find(link => pathname === link.route);
  return (
<SignedOut >
        <div className={'sm:hidden text-primary-500 flex-center p-medium-16 whitespace-nowrap'} >{currentLink && currentLink.label}</div>
        
    </SignedOut>  )
}

export default CurrentRoute