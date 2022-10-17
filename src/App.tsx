import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
