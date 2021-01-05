import ComponentA from "./components/component_a";
import ComponentB from "./components/component_b";
import { Redcuers } from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(Redcuers);
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
}

export default App;
