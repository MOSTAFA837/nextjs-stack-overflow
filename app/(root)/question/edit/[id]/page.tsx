import { getQuestionById } from "@/actions/question.action";
import { getUserById } from "@/actions/user.action";
import Question from "@/components/forms/Question";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";

export default async function page({ params }: ParamsProps) {
  const { userId } = auth();
  if (!userId) return null;

  const mongoUser = await getUserById({ userId });
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question
          type="Edit"
          mongoUserId={mongoUser._id}
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
}
