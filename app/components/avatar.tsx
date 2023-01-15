import { Link } from "@remix-run/react";

type Props = {
  img: string;
  name: string;
  url: string;
};

export function Avatar({ img, name, url }: Props) {
  return (
    <Link to={url} className="flex items-center">
      <img src={img} className="mr-3 h-6 sm:h-9" alt={`${name} Logo`} />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        {name}
      </span>
    </Link>
  );
}
