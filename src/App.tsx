import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import SearchForm from "./components/SearchForm/SearchForm";
import "./index.css";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src="" alt="" className="gif" />
        </div>
      </div>

      <ErrorDisplay />
    </div>
  );
}

export default App;
