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
  })

  return (
    <>
      <section className="bg-dark-50 py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-white">
            <h1 className="h1-bold text-primary">
              Kunle's Games Night
            </h1>
            <p className="p-regular-15 md:p-regular-20 text-secondary">
              Join us for thrilling gatherings of friends, laughter, and epic gaming showdowns!
              Use code <span className="text-accent">KGN10</span> for 10% off at getdaba.com
            </p>
            <Button size="lg" asChild className="bg-primary text-dark-50 w-full sm:w-fit">
              <Link href={"#events"}>
                Explore Now
              </Link>
            </Button>
          </div>
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 w-full flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-primary">Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
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
      </section>
    </>
  );
}
