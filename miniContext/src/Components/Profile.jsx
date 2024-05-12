import { useContext } from "react";
import UserContext from "../Context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <>
      <div>Username:  {user.userName}</div>
      <div>Password: {user.password}</div>
    </>
  );
}
