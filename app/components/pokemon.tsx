import { Link } from "@remix-run/react";

import type { SmallPokemon } from "~/entities";

export function Pokemon({ img, name, url }: SmallPokemon) {
  return (
    <article className="flex w-full flex-col items-center rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <img
        className="h-60 w-60 rounded rounded-t-lg object-fill p-8"
        src={img}
        alt={name}
      />
      <aside className="flex w-full flex-col place-content-center gap-4 px-5 pb-5">
        <h5 className="text-center text-3xl font-bold uppercase text-gray-900 dark:text-white">
          {name}
        </h5>
        <Link
          to={url}
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
        >
          <span className="text-left text-sm font-semibold">More Info</span>
        </Link>
      </aside>
    </article>
  );
}
