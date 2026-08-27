import { Box } from "@mui/material";

export function Sparkle({ color, sx, ...rest }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, position: "absolute", ...sx }} {...rest}>
      <path
        d="M12 0 L14.2 9.3 L23 12 L14.2 14.7 L12 24 L9.8 14.7 L1 12 L9.8 9.3 Z"
        fill={color}
      />
    </Box>
  );
}

export function Squiggle({ color, sx, strokeWidth = "2.5", ...rest }) {
  return (
    <Box component="svg" viewBox="0 0 40 26" sx={{ width: 36, height: 24, position: "absolute", ...sx }} {...rest}>
      <path
        d="M2 20 C 4 8, 12 6, 13 14 C 14 22, 6 24, 8 16 C 10 8, 20 3, 28 8"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    </Box>
  );
}

export function Dot({ color, sx, ...rest }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: color,
        ...sx,
      }}
      {...rest}
    />
  );
}
