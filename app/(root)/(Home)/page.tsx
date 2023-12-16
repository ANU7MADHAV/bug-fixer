import Filter from "@/components/Home/Filter";
import HomeFilters from "@/components/Home/HomeFilters";
import LocalSearchbar from "@/components/Home/LocalSearchbar";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <div className="flex w-full  flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold">All Questions</h1>
        <Link href="/" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient flex min-h-[46px] rounded-lg px-4 py-3">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          otherClasses={""}
          placeholder={"Local search"}
          icon={<CiSearch />}
        />
        <Filter
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
          filters={HomePageFilters}
        />
      </div>
      <HomeFilters />
    </>
  );
}
