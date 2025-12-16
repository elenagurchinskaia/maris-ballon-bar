// import React, { createContext, useContext, useState, useEffect } from "react";

// export const CartContext = createContext();


// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     useEffect(() => {
//         const storedCart = localStorage.getItem("purchaseCart");
//         if (storedCart) {
//             setCart(JSON.parse(storedCart))
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("purchaseCart", JSON.stringify(cart));
//     }, [cart]);

//     const addToCart = (item) => setCart((prev) => [...prev, item]);
//     const clearCart = () => setCart([]);

//     return (
//         <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };


import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("purchaseCart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("purchaseCart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => setCart((prev) => [...prev, item]);
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};