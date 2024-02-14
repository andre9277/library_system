import { User } from "./models/User";
import HomePage from "./pages/HomePage/HomePage";
import { useState, useEffect } from "react";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "./redux/ReduxStore";

function App() {
  const [displayLogin, setDisplayLogin] = useState<boolean>(true);

  const loggedInUser = useSelector(
    (state: RootState) => state.authentication.loggedInUser
  );

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <div>
      <HomePage displayLogin={displayLogin} />
    </div>
  );
}

export default App;
