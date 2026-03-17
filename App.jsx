import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ViewerPage from "./pages/ViewerPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/viewer" element={<ViewerPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
