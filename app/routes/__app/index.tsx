import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";

import { Pokemon } from "~/components";
import { pokemonApi } from "~/services";
import type { PokemonListResponse, SmallPokemon } from "~/entities";

type LoaderData = {
  pokemon: string;
  pokemons: SmallPokemon[];
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return {
      title: "Pokemon App",
      description: "This is an awesome Pokemon App",
      keywords: "Pokedex, PokeApp, Pokemon",
    };
  }

  const { pokemon } = data;

  return {
    title: `Pokemon App | ${pokemon}`,
    description: `This is our awesome ${pokemon}`,
    keywords: `Pokedex, PokeApp, ${pokemon}`,
  };
};

export const loader: LoaderFunction = async () => {
  const { data } = await pokemonApi.get<PokemonListResponse>(
    "/pokemon?limit=151"
  );

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return json<LoaderData>({ pokemon: "Pikachu", pokemons });
};

export default function Index() {
  const { pokemons } = useLoaderData<LoaderData>();

  return (
    <section className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          img={pokemon.img}
          name={pokemon.name}
          url={pokemon.url}
        ></Pokemon>
      ))}
    </section>
  );
}
