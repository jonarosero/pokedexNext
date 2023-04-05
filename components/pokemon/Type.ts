type TypePokemon = {
  name: string;
  color: string;
  text: string;
};

export const getTypePokemon = (type: string): TypePokemon => {
  switch (type) {
    case "normal":
      return { name: "Normal", color: "$gray300", text:"#FFFFFF" };
    case "fighting":
      return { name: "Pelea", color: "$yellow600", text:"#000000"};
    case "flying":
      return { name: "Volador", color: "$cyan900", text:"#000000" };
    case "grass":
      return { name: "Planta", color: "$green400", text:"#FFFFFF" };
    case "poison":
      return { name: "Veneno", color: "$purple200", text:"#FFFFFF" };
    case "ground":
      return { name: "Tierra", color: "$yellow300", text:"#FFFFFF" };
    case "rock":
      return { name: "Roca", color: "$yellow100", text:"#FFFFFF" };
    case "bug":
      return { name: "Bicho", color: "$green800", text:"#000000"};
    case "ghost":
      return { name: "Fantasma", color: "$gray50", text:"#FFFFFF" };
    case "steel":
      return { name: "Acero", color: "$gray800", text:"#000000" };
    case "fire":
      return { name: "Fuego", color: "$red500", text:"#FFFFFF" };
    case "water":
      return { name: "Agua", color: "$blue500", text:"#FFFFFF" };
    case "electric":
      return { name: "Electrico", color: "$yellow800", text:"#000000" };
    case "psychic":
      return { name: "Psiquíco", color: "$pink500", text:"#FFFFFF" };
    case "ice":
      return { name: "Hielo", color: "$cyan800", text:"#000000" };
    case "dragon":
      return { name: "Dragón", color: "$purple50", text:"#FFFFFF" };
    case "fairy":
      return { name: "Hada", color: "$pink800", text:"#000000" };
    case "dark":
      return { name: "Electrico", color: "$accents0", text:"#FFFFFF" };
    case "shadow":
      return { name: "Sombra", color: "$accents2", text:"#FFFFFF" };
    default:
      return { name: "Desconocido", color: "$gray900", text:"#000000" };
  }
};
