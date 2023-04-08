import { Card, Grid, Spacer, Text, Image, Row, Col } from "@nextui-org/react";
import { useAuth } from "../../api";
import Link from "next/link";
import { Discovery, Game, Heart, Lock, TimeCircle, TwoUsers } from "react-iconly";

export default function TrainerCard() {
  const { user } = useAuth();

  return (
    <Card css={{ p: "$6", mw: "800px" }} isHoverable>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12} justify="center">
            <Image
              src={"/pokeball.png"}
              alt="icono de la app"
              width={20}
              height={20}
            />

            <Text h4 css={{ lineHeight: "$xs", textAlign: "center" }}>
              Ficha de Entrenador
            </Text>

            <Image
              src={"/pokeball.png"}
              alt="icono de la app"
              width={20}
              height={20}
            />
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Row>
          <Col>
            <Row
              css={{
                justifyContent: "space-between",
              }}
            >
              <Text
                color="$accents6"
                weight="bold"
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "8px",
                  },
                }}
              >
                N° ID:
              </Text>
              <Text
                size={18}
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "8px",
                  },
                }}
              >
                {user?.uid}
              </Text>
            </Row>
            <Row css={{ justifyContent: "space-between" }}>
              <Text
                color="$accents6"
                weight="bold"
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Nombre:
              </Text>
              <Text
                size={18}
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                {user?.displayName}
              </Text>
            </Row>
            <Row css={{ justifyContent: "space-between" }}>
              <Text
                color="$accents6"
                weight="bold"
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Correo:
              </Text>
              <Text
                size={18}
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                {user?.email}
              </Text>
            </Row>
            <Row css={{ justifyContent: "space-between" }}>
              <Text
                color="$accents6"
                weight="bold"
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Equipos entrenados:
              </Text>
              <Text
                size={18}
                css={{
                  "@media screen and (max-width: 768px)": {
                    fontSize: "10px",
                  },
                }}
              >
                3
              </Text>
            </Row>
          </Col>
          <Col>
            <Card.Image
              src={user?.photoURL ?? ""}
              alt={user?.displayName ?? ""}
              width="35%"
              height="35%"
              objectFit="cover"
            />
          </Col>
        </Row>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row>
          <Text h5>Medallas</Text>
        </Row>
        <Row >
          <Col >
            <Game set="two-tone" primaryColor="blueviolet" />
          </Col>
          <Col >
          <Heart set="two-tone" primaryColor="#F31260"/>
          </Col>
          <Col >
          <Lock set="two-tone" primaryColor="#9750DD"/>
          </Col>
          <Col >
          <TwoUsers set="two-tone" primaryColor="#17C964"/>
          </Col>
          <Col >
          <TimeCircle set="two-tone" primaryColor="#F5A524"/>
          </Col>
          <Col >
          <Discovery set="two-tone" primaryColor="#A66908"/>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
