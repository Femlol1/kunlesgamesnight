import CatergoryFilter from "@/components/shared/CatergoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  });

  return (
    <>
      <section className="relative bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <Image 
          src="/assets/images/94-4Q0A8461.jpg"
          alt="hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-0"
        />
        <div className="wrapper relative z-10 flex flex-col justify-center items-center gap-8 bg-black bg-opacity-0 p-5 md:p-10 rounded-lg text-center">
          <h1 className="h1-bold text-white text-shadow-neon-pink">
            Kunle's Games Night
          </h1>
          <p className="p-regular-20 md:p-regular-24 text-white text-shadow-neon-blue">
            Join us for thrilling gatherings of friends, laughter, and epic gaming showdowns!
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit bg-primary text-white">
            <Link href={"#events"}>
              Events
            </Link>
          </Button>
        </div>
      </section>
      <section id="events" className="wrapper my-8 w-full flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-primary">Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          
          <CatergoryFilter />
        </div>
        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
        <Search />
      </section>
    </>
  );
}
