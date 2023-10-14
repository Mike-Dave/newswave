import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import PageNav from "./components/PageNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageNav />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="business" element={<Business />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="health" element={<Health />} />
          <Route path="science" element={<Science />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
