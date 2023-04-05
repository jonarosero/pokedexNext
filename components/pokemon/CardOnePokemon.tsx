import { Button, Card, Row, Text, useTheme } from "@nextui-org/react";
import { PokemonDetailResponse } from "../../interfaces";
import { useEffect, useState } from "react";
import { getTypePokemon } from "./Type";
import { useRouter } from "next/router";

type Props = {
  pokemon: PokemonDetailResponse;
};

export const CardPokemon = ({pokemon}: Props) => {
  const [currentImage, setCurrentImage] = useState(
    ""
  );

  const principalColor = getTypePokemon(pokemon.types[0].type.name).color;

  const handleFirstVersionClick = () => {
    setCurrentImage(pokemon.sprites.other.home.front_default);
  };

  const handleLastVersionClick = () => {
    setCurrentImage(pokemon.sprites.other.home.front_shiny);
  };
  
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setCurrentImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`);
  }, [id]);


  return (
    <Card key={pokemon.id} css={{ w: "100%", h: "400px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={currentImage}
          css={{ objectFit: "contain", top: 0 }}
          width="75%"
          height="75%"
          alt={pokemon.name}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: principalColor,
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row justify="center">
          <Button.Group color="gradient" bordered shadow>
            <Button flat auto rounded onPress={handleFirstVersionClick}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
              >
                Original
              </Text>
            </Button>
            <Button flat auto rounded onPress={handleLastVersionClick}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"

              >
                Shiny
              </Text>
            </Button>
          </Button.Group>
        </Row>
      </Card.Footer>
    </Card>
  );
};


