import "./App.css";
import Cake from "./containers/Cake";
import Icecream from "./containers/Icecream";
import User from "./containers/User";

function App() {
  return (
    <div className="App">
      <Cake />
      <br />
      <Icecream />
      <br />
      <User />
    </div>
  );
}

export default App;
