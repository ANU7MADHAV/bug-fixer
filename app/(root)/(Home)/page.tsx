import Filter from "@/components/Home/Filter";
import HomeFilters from "@/components/Home/HomeFilters";
import LocalSearchbar from "@/components/Home/LocalSearchbar";
import NotFound from "@/components/Home/NotFound";
import QuestionCard from "@/components/Home/QuestionCard";
import { HomePageFilters } from "@/constants/filters";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const questions = [
    {
      _id: 1,
      title: "Hello how are where arr you",
      tags: [
        {
          _id: 1,
          name: "python",
        },
        { _id: 2, name: "Javascript" },
      ],
      author: {
        id: 7,
        name: "Anu",
      },
      upvotes: 10,
      views: 100,
      answers: 2,
      createdAt: "2021-09-01T12:00:00.00Z",
    },
    {
      _id: 2,
      title: "how are where arr you",
      tags: [
        {
          _id: 1,
          name: "sql",
        },
        { _id: 2, name: "Nextjs" },
      ],
      author: {
        id: 1,
        name: "Asmabhi",
      },
      upvotes: 12,
      views: 500,
      answers: 2,
      createdAt: "2021-09-01T12:00:00.00Z",
    },
  ];
  return (
    <>
      <div className="flex w-full  flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient flex min-h-[46px] rounded-lg px-4 py-3">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-row sm:w-full sm:items-center sm:gap-0">
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
      <div className="flex h-full w-full flex-col gap-9">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              id={question._id}
              answers={question.answers}
              title={question.title}
              author={question.author}
              createdAt={question.createdAt}
              tags={question.tags}
              upvotes={question.upvotes}
              views={question.views}
            />
          ))
        ) : (
          <NotFound
            title={"No Question"}
            description={`🚀Welcome to Bug Helper, your go-to for programming help! No questions
            right now, but our community is ready to assist. Post your coding
            queries, and our developers will help you troubleshoot and find
            solutions. Happy coding!👾`}
            buttonName={"Ask Question"}
          />
        )}
      </div>
    </>
  );
}
