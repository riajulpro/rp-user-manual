import { useContext } from "react";
import { AuthContext } from "../../context/ContextProvider";

const Home = () => {
  const { name } = useContext(AuthContext);

  return <div>{name}</div>;
};

export default Home;
