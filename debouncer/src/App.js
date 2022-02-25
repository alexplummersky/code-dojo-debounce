import logo from "./logo.svg";
import "./App.css";
import { UserContainer } from "./components/UserContainer";

import { getUsers } from "./services/get-users-service";

function App() {
  const getUser = async () => {
    const user = await getUsers("alex");
    console.log(user);
  };

  getUser();

  return <UserContainer />;
}

export default App;
