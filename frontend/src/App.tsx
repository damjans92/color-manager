import "./App.css";
import ColorFilter from "./components/ColorFilter";
import ColorForm from "./components/ColorForm";
import ColorList from "./components/ColorList";
import Header from "./components/Header";
import ColorManager from "./components/Upper";
function App() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <Header />
        <main className="flex flex-col justify-center mt-4">
          <div className="flex justify-between gap-4 px-4 w-[700px] mx-auto">
            <ColorManager />
            {/* <ColorForm /> */}
            <ColorFilter />
          </div>
          <ColorList />
        </main>
      </div>
    </div>
  );
}

export default App;
