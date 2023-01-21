import { Pokemon } from "~/components";
import type { SmallPokemon } from "~/entities";

export function PokemonList({ pokemons }: { pokemons: SmallPokemon[] }) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          img={pokemon.img}
          name={pokemon.name}
          url={`/pokemons/${pokemon.name}`}
        ></Pokemon>
      ))}
    </>
  );
}
