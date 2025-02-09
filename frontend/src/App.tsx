import "./App.css";
import ColorFilter from "./components/Toolbar/ColorFilter";
import ColorList from "./components/ColorList";
import Header from "./components/Header";
import ColorAddNew from "./components/Toolbar/ColorAddNew";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen flex justify-center">
        <div className="w-full max-w-[1280px] mx-auto px-4">
          <Header />
          <main className="flex flex-col justify-center mt-4">
            <div className="flex justify-between gap-4 px-4 w-[700px] mx-auto">
              <ColorAddNew />
              <ColorFilter />
            </div>
            <ColorList />
          </main>
        </div>
      </div>
    </Provider>
  );
}

export default App;
