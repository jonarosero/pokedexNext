import { Button, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { PokemonDetailResponse, TypeElement } from "../../interfaces";
import StatsChar from "./StatsPokemon";
import { getTypePokemon } from "./Type";

type Props = {
  pokemon: PokemonDetailResponse;
};

export const DetailPokemon = (pokemon: Props) => {
  const content = pokemon.pokemon.types.map((type: TypeElement) => {
    const tipoPokemon = getTypePokemon(type.type.name);
    return <Grid xs={6} key={type.type.name}>
        <Button size="sm" css={{ backgroundColor: tipoPokemon.color, color: tipoPokemon.text }}>{tipoPokemon.name}</Button>
    </Grid>
  });

  return (
    <Grid>
      <Row>
        <Text weight="bold" size={40} css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}>
          N° {pokemon.pokemon.id}
        </Text>
        <Spacer x={1}></Spacer>
        <Text transform="uppercase" weight="bold" size={50} css={{ textGradient: "45deg,$purple600 -20%, $pink600 100%" }}>
          {pokemon.pokemon.name}
        </Text>
      </Row>
      <Text size={18}>Altura: {pokemon.pokemon.height/10} m</Text>
      <Text size={18}>Peso: {pokemon.pokemon.weight/10} kg</Text>
      <Text size={20}>Tipo:</Text>
      <Grid.Container gap={2} justify="center">
        {content}
      </Grid.Container>


        <StatsChar stats={pokemon.pokemon.stats}></StatsChar>
    </Grid>
  );
};
