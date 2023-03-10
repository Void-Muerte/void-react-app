import { Routes, Route } from "react-router-dom";
import { Home, About, Products, Contact, error404 } from "./pages";

export default function RoutingV() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<error404 />} />R>
        R>
      </Routes>
    </div>
  );
}
