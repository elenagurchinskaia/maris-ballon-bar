import { createTheme } from "@mui/material/styles";

// Design system color palette:
// - Primary: Party Pink - CTAs, active states, brand accents (~20-25% of a page)
// - Accent: Butter Yellow - small accents only
// - Soft Accent: Balloon Lilac - small accents only
// - Background: Vanilla Cream - dominant background (~50-60% of a page)
// - Text: Deep Plum - body text and contrast
export const colors = {
  primary: "#F25A9B",
  primaryHover: "#D6417B",
  accent: "#F7D85B",
  softAccent: "#C7A5E8",
  background: "#FFF7ED",
  text: "#302236",
  textMuted: "rgba(48, 34, 54, 0.65)",
  border: "rgba(48, 34, 54, 0.12)",
};

// Design system typography:
// - Fraunces: display and editorial headlines (h1-h6)
// - Manrope: body copy, navigation and buttons (everything else)
const theme = createTheme({
  palette: {
    primary: { main: colors.primary, contrastText: "#fff" },
    secondary: { main: colors.softAccent },
    background: { default: colors.background, paper: "#fff" },
    text: { primary: colors.text, secondary: colors.textMuted },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h1: { fontFamily: "'Fraunces', serif" },
    h2: { fontFamily: "'Fraunces', serif" },
    h3: { fontFamily: "'Fraunces', serif" },
    h4: { fontFamily: "'Fraunces', serif" },
    h5: { fontFamily: "'Fraunces', serif" },
    h6: { fontFamily: "'Fraunces', serif" },
  },
});

export default theme;
