import { Button, Col, Row, Table, User } from "@nextui-org/react";
import { Tooltip } from "chart.js";
import { Delete, Edit, Show } from "react-iconly";

export default function TrainerTeam() {
  const columns = [
    { name: "Líder del equipo", uid: "lider" },
    { name: "Nombre del equipo", uid: "name" },
    { name: "Estado", uid: "status" },
    { name: "Acciones", uid: "actions" },
  ];
  return (
    <Table
      aria-label="Team table"
      lined
      headerLined
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}{" "}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>
            <User
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              name="Bulbasaur"
              size="ms"
              bordered
              color="gradient"
            />
          </Table.Cell>
          <Table.Cell>Equipo hierbas</Table.Cell>
          <Table.Cell>Activo</Table.Cell>
          <Table.Cell>
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="success"
                  icon={<Show set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="warning"
                  icon={<Edit set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="error"
                  icon={<Delete set="broken" primaryColor="white" />}
                />
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>
        
        {/* Esto es solo para pruebas */}
        <Table.Row key="1">
          <Table.Cell>
            <User
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              name="Charizard"
              size="ms"
              bordered
              color="gradient"
            />
          </Table.Cell>
          <Table.Cell>Equipo alfa dinamita</Table.Cell>
          <Table.Cell>Pausa</Table.Cell>
          <Table.Cell>
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="success"
                  icon={<Show set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="warning"
                  icon={<Edit set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="error"
                  icon={<Delete set="broken" primaryColor="white" />}
                />
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>
        <Table.Row key="1">
          <Table.Cell>
            <User
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
              name="Mew"
              size="ms"
              bordered
              color="gradient"
            />
          </Table.Cell>
          <Table.Cell>Madre de dios</Table.Cell>
          <Table.Cell>Activo</Table.Cell>
          <Table.Cell>
            <Row justify="center" align="center">
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="success"
                  icon={<Show set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="warning"
                  icon={<Edit set="broken" primaryColor="white" />}
                />
              </Col>
              <Col css={{ d: "flex" }}>
                <Button
                  auto
                  color="error"
                  icon={<Delete set="broken" primaryColor="white" />}
                />
              </Col>
            </Row>
          </Table.Cell>
        </Table.Row>
        
      </Table.Body>
    </Table>
  );
}
