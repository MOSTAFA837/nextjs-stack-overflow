import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

export default function Metric({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  href,
  isAuthor,
}: Props) {
  const content = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />

      <p className={`flex items-center gap-1 ${textStyles}`}>
        <span>{value}</span>
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor && "max-sm:hidden"
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {content}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{content}</div>;
}
