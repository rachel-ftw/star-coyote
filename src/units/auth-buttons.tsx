import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/button";

const AuthButtons = () => {
  const { isLoading, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Oops... {error.message}</div>;

  if (!isLoading) {
    if (!user) return <Button text="log in" onClick={loginWithRedirect} />;

    return <Button text="save & log out" onClick={logout} />;
  }

  return null;
};

export default AuthButtons;
