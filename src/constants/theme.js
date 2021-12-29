export const theme = Object.freeze({
  colors: {
    white: "#ffffff",
    grey: "#545454",
    greyLigth: "#f7f7f7",
    greyOpacity: "rgba(47, 48, 58, 0.1)",
    brown: "#3d2626",
    orange: "#ff6b08",
    tableHead: "#423a8a",
    primaryText: "#292929",
    secondaryText: "#757575",
    tableText: "#afb1b8",
    boxShadow: "0px 5px 10px 8px rgba(34, 60, 80, 0.2)",
  },
  fonts: {
    secondary: "'Work Sans', sans-serif",
  },
  spacing: (value) => `${4 * value}px`,
});
