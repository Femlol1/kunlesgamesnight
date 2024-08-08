'use client';
import { userHeaderLink } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserNavItems = () => {
    const pathname = usePathname();
    const currentLink = userHeaderLink.find(link => pathname === link.route);

  return (
    <ul className="md:flex-between flex w-full flex-full flex-col items-start gap-5 md:flex-row">
        {userHeaderLink.map((link) => {
            const isActive = pathname === link.route;

            return (
                <li
                key={link.route}
                className={`${
                    isActive && 'text-primary font-bold'
                } flex-center font-bold whitespace-nowrap`} 
            >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
    </ul>
    
  )
}

export default UserNavItems