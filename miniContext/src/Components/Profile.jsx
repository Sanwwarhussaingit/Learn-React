import UserContext from "../Context/UserContext";
export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;

  return (
    <>
      <div>Welcom {user.userName}</div>
    </>
  );
}
