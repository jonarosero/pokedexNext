import { Avatar, Input, Navbar, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";

interface NavbarProps{
    menu?: string,
}


export const NavbarPokedex =({ menu }: NavbarProps)=>{

    let kanto;
    let jhoto;
    let hoenn;
    
    switch (menu) {
        case "kanto":
            kanto=true;
            jhoto=false;
            hoenn=false;
            break;

        case "johto":
            kanto=false;
            jhoto=true;
            hoenn=false;
            break;

        case "hoenn":
            kanto=false;
            jhoto = false;
            hoenn = true;
            break;

        default:
            kanto=false;
            jhoto = false;
            hoenn = false;
            break;
    }

    
    return (
        <Navbar isBordered variant='sticky'>
            <Navbar.Brand css={{mr:"$4"}}>
            <Link href="/">
             <Image src={"/pokeball.png"}
              alt="icono de la app"
              width={20}
              height={20}/></Link>
              <Text b color="inherit" css={{mr:"$14"}} hideIn="xs">Pokédex</Text>
              <Navbar.Content hideIn='xs' variant="highlight-rounded" activeColor="secondary" >
                <Navbar.Link isActive={kanto} href="/">Kanto</Navbar.Link>
                <Navbar.Link isActive={jhoto} href="/johto">Johto</Navbar.Link>
                <Navbar.Link isActive={hoenn} href="/hoenn">Hoenn</Navbar.Link>
            </Navbar.Content>
            </Navbar.Brand>
            <Navbar.Content css={{"@xsMax":{
                w:"100%",
                jc: "space-between",
            },
            }}>
                <Navbar.Item css={{
                    "@xsMax":{
                        w:"100%",
                        jc:"center",
                    },
                }}>
                    <Input clearable 
                    
                    css={{
                      w: "100%",
                      "@xsMax": {
                        mw: "300px",
                      },
                      "& .nextui-input-content--left": {
                        h: "100%",
                        ml: "$4",
                        dflex: "center",
                      },
                    }}
                    placeholder="Buscar..."
                  />
                </Navbar.Item>
                <Navbar.Item>
                    
                        <Avatar bordered as="button" color="gradient" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                  
                </Navbar.Item>

            </Navbar.Content>

        </Navbar>
    )
}