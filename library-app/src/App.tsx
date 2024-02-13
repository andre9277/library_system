import { User } from "./models/User";
import HomePage from "./pages/HomePage/HomePage";
import { useState } from "react";

function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<User>();

  return (
    <div>
      <HomePage displayLogin={displayLogin} />
    </div>
  );
}

export default App;
