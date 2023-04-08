import { Button, Col, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { useAuth } from "../../../api";
import { Layout } from "../../../components/layouts";
import { TrainerCard, TrainerTeam } from "../../../components/trainer";
import { Plus } from "react-iconly";


export default function MyTeam (){
    const { user, loading, error } = useAuth();
    return(
        <Layout title={user?.displayName ?? undefined}>

            <Spacer y={1}/>

            <Grid.Container gap={2} justify="center">
                <Grid xs={12} justify="center">
                <TrainerCard></TrainerCard>
                </Grid>                   
            </Grid.Container>
            <Spacer y={1}/>

            <Grid.Container gap={2} justify="center">
                <Grid xs={6}>
                <Text h3> My Equipo</Text></Grid>
                <Grid xs={6} justify="flex-end">

                <Button color={"primary"} icon={<Plus set="broken" primaryColor="white"/>} auto>
                    Crea un nuevo equipo

                </Button></Grid>
                </Grid.Container>


            <TrainerTeam></TrainerTeam>

        </Layout>
    );
}