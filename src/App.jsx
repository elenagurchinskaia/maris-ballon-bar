import "./App.css";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";

function App() {

  return (
    <CartProvider>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box sx={{ flex: "1 0 auto" }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </CartProvider>
  );
}

export default App;
