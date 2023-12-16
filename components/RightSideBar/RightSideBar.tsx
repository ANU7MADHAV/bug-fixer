import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import RenderTags from "../RenderTags";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: 1, title: "How nextjs works" },
    { _id: 2, title: "How nextjs works" },
    { _id: 3, title: "How nextjs works" },
    { _id: 4, title: "How nextjs works" },
  ];
  const renderTags = [
    { _id: 1, name: "Javascript", totalquestions: 4 },
    { _id: 2, name: "Nextjs", totalquestions: 2 },
    { _id: 3, name: "React", totalquestions: 3 },
    { _id: 4, name: "Nodejs", totalquestions: 5 },
  ];
  return (
    <section>
      <div className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[266px]">
        <div>
          <h1 className="h3-bold">Top Questions</h1>
          <div className="mt-7 flex flex-col gap-[30px]">
            {hotQuestions.map((question) => (
              <Link
                key={question._id}
                href={`/questions/${question._id}`}
                className="flex-between cursor-pointer"
              >
                <p className="body-medium font-light">{question.title}</p>
                <MdArrowForwardIos />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="h3-bold mt-7">Popluar Tags</h1>
          {renderTags.map((tag) => (
            <RenderTags
              key={tag._id}
              id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalquestions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
