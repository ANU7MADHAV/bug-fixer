import Link from "next/link";
import { SlLike } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { RiQuestionAnswerLine } from "react-icons/ri";
import RenderTags from "../RenderTags";
import Metric from "../Metric";

interface Props {
  id: number;
  answers: number;
  tags: {
    _id: number;
    name: string;
  }[];
  author: {
    id: number;
    name: string;
  };
  views: number;
  upvotes: number;
  title: string;
  createdAt: string;
}

const QuestionCard = ({
  views,
  tags,
  title,
  id,
  answers,
  author,
  upvotes,
  createdAt,
}: Props) => {
  return (
    <div className=" mt-7 rounded-[10px] border-none bg-light-850 p-9 text-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
      <div className="flex flex-col justify-between gap-5 sm:flex-row-reverse">
        <span className=" ">{String(createdAt)}</span>
        <Link href={`/question/${id}`}>
          <h3 className="h3-bold line-clamp-1 flex-1 ">{title}</h3>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <RenderTags key={tag._id} id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="mt-10 flex w-full justify-between">
        <div>
          <p>{author.name}</p>
        </div>
        <div className="flex gap-2">
          <Metric img={<SlLike />} value={upvotes} />
          <Metric img={<IoEyeOutline />} value={views} />
          <Metric img={<RiQuestionAnswerLine />} value={answers} />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
