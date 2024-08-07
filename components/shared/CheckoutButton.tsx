// "use client"

// import { IEvent } from "@/lib/database/models/event.model";
// import { useUser } from "@clerk/nextjs";
// import Checkout from "./Checkout";




// const CheckoutButton = ({ event }: { event: IEvent }) => {
// 	const { user } = useUser();
// 	const userId = user?.publicMetadata.userId as string;
// 	const hasEventFinished = event.endDateTime ? new Date(event.endDateTime) < new Date() : false;
  
// 	return (
// 	  <div className="flex items-center gap-3">
// 		{hasEventFinished ? (
// 		  <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
// 		): (
// 		  <>
// 			{/* <SignedOut>
// 			  <Button asChild className="button rounded-full" size="lg">
// 				<Link href="/sign-in">
// 				  Get Tickets
// 				</Link>
// 			  </Button>
// 			</SignedOut>
  
// 			<SignedIn> */}
// 			  <Checkout event={event} userId={userId} />
// 			{/* </SignedIn> */}
// 		  </>
// 		)}
// 	  </div>
// 	)
//   }
  
//   export default CheckoutButton

"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = event.endDateTime ? new Date(event.endDateTime) < new Date() : false;

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
      ) : (
        <Link href={event.url} passHref>
          <Button className="button rounded-full p-3 text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-200">
            Get Tickets
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CheckoutButton;
