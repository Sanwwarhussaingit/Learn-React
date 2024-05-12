/* eslint-disable no-unused-vars */
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type="text"
        placeholder="passwaord"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
