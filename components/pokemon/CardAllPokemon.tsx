import {
  Button,
  Card,
  Col,
  Grid,
  Row,
  Text,
  useTheme,
} from "@nextui-org/react";
import Link from "next/link";

export const CardPokemons = ({ pokemon, id }: any) => {
  const { theme } = useTheme();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <Grid xs={12} md={4} xl={3} justify="center">
      <Card key={pokemon.name} css={{ w: "100", h: "300px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              Atrápalos a todos
            </Text>
            <Text h2 size={14} b>
              N°: {id}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0, backgroundColor: theme?.colors.gray200.value }}>
          <Card.Image
            src={imageUrl}
            width="100%"
            height="100%"
            alt={pokemon.name}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col span={8}>
              <Text
                h3
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                transform="uppercase"
              >
                {pokemon.name}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Link href={`/pokemon/${id}`} style={{ color: "white" }}>
                  <Button flat auto rounded color="gradient">
                    <Text size={12} weight="bold" transform="uppercase">
                      Ver más
                    </Text>
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
