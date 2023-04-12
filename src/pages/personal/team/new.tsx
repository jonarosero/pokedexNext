import Autocomplete from "@mui/material/Autocomplete";
import { Layout } from "../../../../components/layouts";
import { Image, Spacer, Text } from "@nextui-org/react";

import { GetStaticProps } from "next";
import { pokeApi } from "../../../../api";
import { PokemonListResponse } from "../../../../interfaces";
import FormNewTeam from "../../../../components/forms/FormNew";


export default function NewTeam(props: any) {

  return (
    <Layout title="Nuevo Equipo">
      <Spacer y={1} />
      { <FormNewTeam pokemons={props}></FormNewTeam> }
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=386");

  return {
    props: {
      pokemons: data.results,
    },
  };
};
