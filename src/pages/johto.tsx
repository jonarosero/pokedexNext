import { GetStaticProps } from "next";
import { pokeApi } from "../../api";
import { PokemonListResponse } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { Grid } from "@nextui-org/react";
import { CardPokemons } from "../../components/pokemon";

export default function JohtoRegion(props: any) {
  const content = props.pokemons.map((pokemon: any) => {
    const id = pokemon.url.split("/")[6];
    return <CardPokemons pokemon={pokemon} id={id} />;
  });

  return (
    <Layout title="Pokedex-Johto" menu="johto">
      <Grid.Container gap={2} justify="center">
        {content}
      </Grid.Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=100&offset=151"
  );

  return {
    props: {
      pokemons: data.results,
    },
  };
};
