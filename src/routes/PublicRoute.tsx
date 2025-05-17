import { Route, Routes } from "react-router-dom";
import BookPage from "../pages/BookPage";
import Home from "../pages/Home";
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";

// Component defining public routes
const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/book" element={<BookPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default PublicRoute;
