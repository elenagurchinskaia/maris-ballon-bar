import "./App.css";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { FavoritesProvider } from "./components/FavoritesContext";

function App() {

  return (
    <CartProvider>
      <FavoritesProvider>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Box sx={{ flex: "1 0 auto" }}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
