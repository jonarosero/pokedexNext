import Head from "next/head";
import { NavbarPokedex } from "../ui";

interface LayoutProps {
    children: React.ReactNode;
    title?: string,
    menu? : string
}

export const Layout = ({ children, title, menu }: LayoutProps) =>{
    return(
        <>
            <Head>
                <title>{title || 'Pokedex'}</title>
                <meta name="author" content="Jonathan Rosero" />
                <meta name="description" content={`Información sobre el pokémon ${title}`}/>
                <meta name="keywords" content={`${title},pokemon, pokedex`}/>
            </Head>
            <NavbarPokedex menu={menu}></NavbarPokedex>
            <main style={{
                padding:'0px 20px'
            }}>
                {children}
            </main>
        </>
    )
};