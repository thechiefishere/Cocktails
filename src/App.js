import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cards from "./components/Cards";
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
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Cards />} />
              <Route path="/home:idDrink" element={<DrinkDetail />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
