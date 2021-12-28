export const theme = Object.freeze({
  colors: {
    white: "#ffffff",
    grey: "#bdbdbd",
    greyBg: "#f5f5fa",
    greyOpacity: "rgba(47, 48, 58, 0.1)",
    green: "#4caf50",
    red: "#f44336",
    tableHead: "#423a8a",
    primaryText: "#2b2b2b",
    secondaryText: "#757575",
    tableText: "#afb1b8",
    boxShadow:
      "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  fonts: {
    secondary: "'Work Sans', sans-serif",
  },
  spacing: (value) => `${4 * value}px`,
});
