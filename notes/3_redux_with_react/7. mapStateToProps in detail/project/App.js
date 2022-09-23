import "./App.css";
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCream from "./components/HooksIceCream";
import NoOfCakeContainer from "./components/NoOfCakeContainer";
import ShowItem from "./components/ShowItem";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShowItem cake />
        <ShowItem />
        {/* <NoOfCakeContainer /> */}
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCream /> */}
      </div>
    </Provider>
  );
}

export default App;
