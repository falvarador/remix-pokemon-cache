import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { Pokemon } from "~/entities";
import { pokemonApi } from "~/services";

type LoaderData = {
  pokemon: Pokemon;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${params.pokemon}`);

  return json({
    pokemon: data,
  });
};

export default function Page() {
  const { pokemon } = useLoaderData<LoaderData>();

  return (
    <section className="grid grid-cols-1 gap-2 p-2 md:grid-cols-2 lg:grid-cols-3">
      <article className="flex w-full flex-col items-center rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <img
          className="h-32 w-32 rounded-t-lg object-cover"
          src={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
          alt={pokemon.name}
        />
        <div className="flex w-full flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {pokemon.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
        </div>
      </article>
    </section>
  );
}

/* <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card hoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                "/no-image.png"
              }
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}
            </Text>

            <Button
              color="gradient"
              ghost={!isInFavorites}
              onClick={onToggleFavorite}
            >
              {isInFavorites ? "En Favoritos" : "Guardar en favoritos"}
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size={30}>Sprites:</Text>

            <Container direction="row" display="flex" gap={0}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container> */
