import React, { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("seasonalFavorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("seasonalFavorites", JSON.stringify(favorites));
    }, [favorites]);

    const isFavorite = (src) => favorites.some((item) => item.src === src);

    const toggleFavorite = (item) => {
        setFavorites((prev) =>
            prev.some((f) => f.src === item.src)
                ? prev.filter((f) => f.src !== item.src)
                : [...prev, item]
        );
    };

    const removeFavorite = (src) => {
        setFavorites((prev) => prev.filter((f) => f.src !== src));
    };

    const clearFavorites = () => setFavorites([]);

    return (
        <FavoritesContext.Provider
            value={{ favorites, isFavorite, toggleFavorite, removeFavorite, clearFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
