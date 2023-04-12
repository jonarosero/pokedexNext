import Autocomplete from "@mui/material/Autocomplete";
import { Image, Spacer, Text } from "@nextui-org/react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

import { useState } from "react";
import { SmallPokemon } from "../../interfaces";


export default function FormNewTeam({ pokemons }: any) {
  const [lider, setLider] = useState("");
  console.log(lider);
  const pokemonList:SmallPokemon[] = pokemons?.pokemons || [];


  return (
    <>
      <Autocomplete
        freeSolo
        sx={{ width: 300 }}
        id="combo-box-demo"
        options={pokemonList.map((option) => option)}
        getOptionLabel={(option) => typeof option === 'object' ? option?.name ?? '' : ''}
        onInputChange={(event, newInput) => {
          const selectedOption = pokemonList.find(
            (option) => option.name.toLowerCase() === newInput.toLowerCase()
          );
          const id = selectedOption?.url.split("/")[6];
          if (selectedOption) {
            setLider(id ?? "");
          } else {
            setLider("");
          }
        }}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                option.url.split("/")[6]
              }.png`}
              width={50}
            />
            <Spacer x={1} />
            <Text color="primary">N°{option.url.split("/")[6]}</Text>
            <Spacer x={1}/>
            <Text transform="uppercase">{option.name}</Text>
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Escoja al lider del equipo" />
        )}
      />
      {lider ? (
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${lider}.png`}
          width={100}
        />
      ) : (
        ""
      )}
    </>
  );
}
