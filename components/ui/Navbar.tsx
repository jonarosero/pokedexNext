import {
    Avatar,
  Button,
  Dropdown,
  FormElement,
  Input,
  Navbar,
  Text,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { login, logout, pokeApi, useAuth } from "../../api";
import { useState } from "react";
import { useRouter } from "next/router";
import { Login, Logout, Work } from "react-iconly";
import NavbarLink from "@nextui-org/react/types/navbar/navbar-link";

interface NavbarProps {
  menu?: string;
}

export const NavbarPokedex = ({ menu }: NavbarProps) => {
  const { user, loading, error } = useAuth();

  const handleLogin = async () => {
    await login();
  };

  const handleLogout = async () => {
    await logout();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  async function handleSearchChange(event: React.ChangeEvent<FormElement>) {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }

  async function handleSearchEnter(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      const result = await searchPokemon(searchTerm);
      if (result) {
        router.push(`/pokemon/${result.id}`);
      }
    }
  }

  let kanto;
  let jhoto;
  let hoenn;

  switch (menu) {
    case "kanto":
      kanto = true;
      jhoto = false;
      hoenn = false;
      break;

    case "johto":
      kanto = false;
      jhoto = true;
      hoenn = false;
      break;

    case "hoenn":
      kanto = false;
      jhoto = false;
      hoenn = true;
      break;

    default:
      kanto = false;
      jhoto = false;
      hoenn = false;
      break;
  }

  return (
    <Navbar isBordered variant="sticky">
                <Navbar.Toggle aria-label="toggle navigation" showIn={"xs"} />
      <Navbar.Brand css={{ mr: "$4" }} hideIn="xs">
        <Link href="/">
          <Image
            src={"/pokeball.png"}
            alt="icono de la app"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"/"} style={{ color: "inherit" }}>
          <Text b color="inherit" css={{ mr: "$14" }} >
            Pokédex
          </Text>
        </Link>
        <Navbar.Content
          hideIn="xs"
          variant="highlight-rounded"
          activeColor="secondary"
        >
          <Navbar.Link isActive={kanto} href="/">
            Kanto
          </Navbar.Link>
          <Navbar.Link isActive={jhoto} href="/johto">
            Johto
          </Navbar.Link>
          <Navbar.Link isActive={hoenn} href="/hoenn">
            Hoenn
          </Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            css={{
              w: "100%",
              "@xsMax": {
                mw: "400px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Buscar..."
            onChange={handleSearchChange}
            onKeyDown={handleSearchEnter}
          />
        </Navbar.Item>
        <Navbar.Item>
          {!user ? (
            <Button
              auto
              onClick={handleLogin}
              icon={<Login set="broken" primaryColor="white" />}
            >
              Iniciar Sesión
            </Button>
          ) : (
            ""
          )}
        </Navbar.Item>
        {user ? (
          <Dropdown isBordered>
            <Navbar.Item >
              <Dropdown.Button
                auto
                light
                css={{
                  width: "200px",
                  height: "100%",
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}
              >
                <User
                  color="gradient"
                  src={user.photoURL ?? undefined}
                  name={user.displayName}
                  description="Maestro Pokémon"
                />
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="Menu personal"
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
                    mr: "$4",
                  },
                  // dropdown item title
                  "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                  },
                },
              }}
            >
              <Dropdown.Item
                key="autoscaling"
                showFullDescription
                description="Revisa tu equipo de Pokemons"
                icon={<Work set="broken" primaryColor="blueviolet" />}
              >
                Mi equipo
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                icon={<Logout set="broken" primaryColor="#F31260" />}
              >
                <Navbar.Link onClick={handleLogout}>Salir</Navbar.Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          ""
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link
            style={{
              color: "inherit",
              minWidth: "100%",
            }}
            href="/"
          >
            Kanto
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
        <Link
            style={{
              color: "inherit",
              minWidth: "100%",
            }}
            href="/johto"
          >
            Johto
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
        <Link
            style={{
              color: "inherit",
              minWidth: "100%",
            }}
            href="/hoenn"
          >
            Hoenn
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

async function searchPokemon(searchTerm: string) {
  try {
    const response = await pokeApi.get(`/pokemon/${searchTerm.toLowerCase()}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
