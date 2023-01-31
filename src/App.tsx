import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SearchForm from "./components/SearchForm/SearchForm";
import "./index.css";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <ImageDisplay />

      <ErrorDisplay />
    </div>
  );
}

export default App;
