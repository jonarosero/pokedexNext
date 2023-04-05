import { Button } from "@nextui-org/react";
import { login, logout, useAuth } from "../../api";


export default function Login() {
  const {user, loading, error} = useAuth();

  const handleLogin = async()=>{
    await login();
  }

  const handleLogout = async() =>{
    await logout();
  }

  return(
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <p>Bienvenido, {user.displayName}!</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
      {!user && (
        <div>
          <p>Inicia sesión para ver el contenido</p>
          <button onClick={handleLogin}>Iniciar sesión con Google</button>
        </div>
      )}
    </div>
  );
}
