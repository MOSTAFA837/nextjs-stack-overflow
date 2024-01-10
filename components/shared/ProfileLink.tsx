import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  href?: string;
  title: string;
}

export default function ProfileLink({ imgUrl, href, title }: Props) {
  return (
    <div className="flex-center gap-1">
      <Image src={imgUrl} alt="icon" width={20} height={20} />

      {href ? (
        <Link
          href={href}
          target="_blank"
          className="paragraph-medium text-blue-500"
        >
          {title}
        </Link>
      ) : (
        <p className="text-dark400_light700 paragraph-medium">{title}</p>
      )}
    </div>
  );
}
