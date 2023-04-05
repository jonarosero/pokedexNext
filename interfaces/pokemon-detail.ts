export interface PokemonDetailResponse {
    height:  number;
    id:      number;
    name:    string;
    sprites: Sprites;
    types:   TypeElement[];
    weight:  number;
    stats: Stat[];
}

export interface Sprites {
    "front_default": string;
    other: Other;
    versions: Versions;
}

export interface Other{
    home:Home;
}

export interface Home{
    "front_default": string;
    "front_shiny": string;
}

export interface Versions {
    "generation-vii": GenerationVii;
}

export interface GenerationVii {
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface UltraSunUltraMoon {
    front_default: string;
}

export interface TypeElement {
    slot: number;
    type: TypeType;
}

export interface TypeType {
    name: string;
    url:  string;
}

export interface Stat{
    base_stat: number;
    stat: StatStat;
}

export interface StatStat{
    name:string;
}