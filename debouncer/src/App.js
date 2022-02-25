import logo from "./logo.svg";
import "./App.css";

import { getUsers } from "./services/get-users-service";

function App() {

  const getUser = async () => {
    const user = await getUsers("alex");
    console.log(user);
  };

  getUser();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
