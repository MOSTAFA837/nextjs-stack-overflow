import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

export const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "react", totalQuestions: 10 },
  { _id: 3, name: "next", totalQuestions: 3 },
  { _id: 4, name: "php", totalQuestions: 7 },
  { _id: 5, name: "laravel", totalQuestions: 6 },
];

export default function RightSidebar() {
  return (
    <div
      className="background-light900_dark200 light-border 
        custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col 
        overflow-y-auto border-l p-6 pt-36 shadow-light-300 
        dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          <Link
            href={`/question/question.id`}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">
              What is the diffrences in next 14?
            </p>

            <Image
              src="/assets/icons/arrow-right.svg"
              alt="right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </div>
  );
}
