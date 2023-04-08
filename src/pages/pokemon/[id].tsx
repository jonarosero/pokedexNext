import { useRouter } from "next/router";
import { Layout } from "../../../components/layouts";
import { GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../../api";
import { PokemonDetailResponse } from "../../../interfaces";
import { Button, Col, Grid, Loading, Row, Spacer } from "@nextui-org/react";
import { CardPokemon, DetailPokemon } from "../../../components/pokemon";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-iconly";

type Props = {
  pokemon: PokemonDetailResponse;
};

const PokemonDetail = ({ pokemon }: Props) => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  if (!id) {
    return <Loading size="xs" />;
  }

  const idNumber = Number(id);

  const nextPokemon = idNumber + 1;

  let beforePokemon: number;

  if (idNumber == 1) {
    beforePokemon = idNumber;
  }
  beforePokemon = idNumber - 1;

  return (
    <Layout title={pokemon.name}>
      <Spacer y={1} />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={6} justify="center">
          <CardPokemon pokemon={pokemon}></CardPokemon>
        </Grid>
        <Grid xs={12} md={6}>
          <DetailPokemon pokemon={pokemon}></DetailPokemon>
        </Grid>
      </Grid.Container>
      <Row justify="space-between">
        <Link href={`/pokemon/${beforePokemon}`} style={{ textAlign: "left" }}>
          <Button
            auto
            ghost
            color="primary"
            rounded
            size="sm"
            icon={<ChevronLeft set="broken" />}
          >
            Anterior
          </Button>
        </Link>
        <Link href={`/pokemon/${nextPokemon}`} style={{ textAlign: "right" }}>
          <Button
            auto
            ghost
            color="primary"
            rounded
            size="sm"
            iconRight={<ChevronRight set="broken"  />}
          >
            Siguiente
          </Button>
        </Link>
      </Row>
    </Layout>
  );
};

export default PokemonDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get("/pokemon?limit=386");
  const paths = data.results.map((pokemon: any) => ({
    params: { id: pokemon.url.split("/").slice(-2, -1)[0] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const id = ctx.params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const { data } = await pokeApi.get<PokemonDetailResponse>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};
