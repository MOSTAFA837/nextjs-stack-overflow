import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

export default function RenderTag({
  _id,
  name,
  totalQuestions,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light700_dark300 text-light400_light500 rounded-md border-none px-4 uppercase">
        {name}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
}