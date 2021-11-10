import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cards from "./components/Cards";
import Error from "./components/Error";
import DrinkDetail from "./components/DrinkDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route path="/" element={<Cards />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/cocktail/:idDrink" element={<DrinkDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
