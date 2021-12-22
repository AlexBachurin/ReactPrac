import CocktailsList from "./components/CocktailsList";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <SearchForm />
        <CocktailsList />
      </main>
    </>
  );
}

export default App;
