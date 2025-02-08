import "./App.css";
import ColorFilter from "./components/ColorFilter";
import ColorForm from "./components/ColorForm";
import ColorList from "./components/ColorList";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center mt-4 max-auto">
        <div className="flex justify-center gap-4">
          <ColorForm />
          <ColorFilter />
        </div>
        <ColorList />
      </main>
    </>
  );
}

export default App;
