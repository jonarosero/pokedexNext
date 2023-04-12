import Autocomplete from "@mui/material/Autocomplete";
import { Layout } from "../../../../components/layouts";
import { Image, Spacer, Text } from "@nextui-org/react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

import { useState } from "react";
export default function NewTeam() {
  const [lider, setLider] = useState("");
  console.log(lider);

  return (
    <Layout title="Nuevo Equipo">
      <Spacer y={1} />

      <Autocomplete

        freeSolo
        sx={{width:300}}
        id="combo-box-demo"
        options={top100Films.map((option) => option)}
        onInputChange={(event, newInput) => {
            const selectedOption = top100Films.find(option => option.label.toLowerCase() === newInput.toLowerCase());
            if (selectedOption) {
              setLider(selectedOption.year.toString());
            } else {
              setLider("");
            }
          }}
        renderOption={(props, option)=>(
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${option.year}.png`} width={50}/>
                <Spacer x={0.5}/>
                <Text color="primary">N°{option.year}</Text>
                <Spacer y={0.25}/>
                <Text transform="uppercase">{option.label}</Text>


            </Box>
        )}

        renderInput={(params) => <TextField {...params} label="Escoja al lider del equipo" />}
      />
      {lider ?
      <Image src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${lider}.png`} width={100}/>:""}
    </Layout>
  );
}

const top100Films = [
  { label: "bulbasur", year: 1 },
  { label: "ivisur", year: 2 },
  { label: "venasaur", year: 3 },
];