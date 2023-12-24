import Question from "@/components/Questions/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  // const { userId } = auth();
  const userId = "clerk123";
  if (!userId) redirect("/sign-in");
  const mongooUser = await getUserById({ userId });
  console.log(mongooUser);
  return (
    <div>
      <h1 className="h1-bold">Ask Question</h1>
      <Question mongoUserId={JSON.stringify(mongooUser._id)} />
    </div>
  );
};

export default AskQuestion;
