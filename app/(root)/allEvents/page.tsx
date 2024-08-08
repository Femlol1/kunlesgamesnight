import CatergoryFilter from "@/components/shared/CatergoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";

export default async function AllEvents({ searchParams }: SearchParamProps) {
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
    <div>
      <section id="events" className="wrapper my-8 w-full flex flex-col gap-8 md:gap-12">
        <div className="flex w-full flex-row gap-5 md:flex-row">
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
    </div>
  )
}

