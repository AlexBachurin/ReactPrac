import React from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useGlobalContext } from './context'
function App() {
  const { loading } = useGlobalContext();
  return (
    <main>
      <Navbar />
      {loading ? <Loading /> : <CartContainer />}
    </main>
  );
}

export default App;
