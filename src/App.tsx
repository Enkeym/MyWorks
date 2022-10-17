import {
  Routes,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import AirportDetail from "./pages/AirportDetail";
import Auth from "./pages/Auth";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/airport/:id" element={<AirportDetail />} />
      </Routes>
    </>
  );
}

export default App;
