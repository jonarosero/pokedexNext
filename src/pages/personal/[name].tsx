import { useAuth } from "../../../api";
import { Layout } from "../../../components/layouts";

export default function MyTeam (){
    const { user, loading, error } = useAuth();
    return(
        <Layout title={user?.displayName ?? undefined}>

            que hay mundo

        </Layout>
    );
}