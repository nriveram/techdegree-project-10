import { useContext } from "react";
import UserContext from "../context/UserContext";

const Authenticated = () => {
  const { authUser } = useContext(UserContext);

  return (
    <div className="bounds">
      <div className="grid-100">
        <h1>{authUser.firstName} {authUser.lastName} is Authenticated</h1>
        <p>Your email address is {authUser.emailAddress}</p>
      </div>
    </div>
  );
}

export default Authenticated;