import ColorFilter from "./components/Toolbar/ColorFilter";
import ColorList from "./components/ColorList";
import Header from "./components/Header";
import ColorAddNew from "./components/Toolbar/ColorAddNew";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen flex justify-center">
        <div className="w-full max-w-[1330px] mx-auto px-4">
          <Header />
          <main className="flex flex-col justify-center mt-4">
            <div className="flex flex-wrap justify-between gap-4 px-4 max-w-[700px] w-full mx-auto mb-10">
              <ColorAddNew />
              <ColorFilter />
            </div>
            <ColorList />
          </main>
        </div>
      </div>
      <ToastContainer />
    </Provider>
  );
}

export default App;
