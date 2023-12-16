import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Props {
  id: number;
  name: string;
  totalQuestions: number;
}

const RenderTags = ({ id, name, totalQuestions }: Props) => {
  return (
    <div className="flex flex-col ">
      <Link href={`/tags/${id}`} className="flex-between ">
        <Badge className="mt-5 bg-slate-500">{name}</Badge>
        {totalQuestions}
      </Link>
    </div>
  );
};

export default RenderTags;
