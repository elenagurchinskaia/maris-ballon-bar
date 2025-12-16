import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";




function App() {

  return (
    <CartProvider>
      <div>
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
