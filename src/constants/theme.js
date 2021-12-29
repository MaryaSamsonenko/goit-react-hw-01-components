export const theme = Object.freeze({
  colors: {
    white: "#ffffff",
    grey: "#545454",
    greyLigth: "#f7f7f7",
    greyOpacity: "rgba(47, 48, 58, 0.1)",
    blue: "#7056a1e7",
    blueLigth: "#c0c5fc3a",
    orange: "#ff6b08",
    red: "rgba(253, 8, 8, 0.993)",
    green: "#06e77efd",
    tableHead: "#423a8a",
    primaryText: "#292929",
    secondaryText: "#757575",
    tableText: "#afb1b8",
    boxShadow: "0px 5px 10px 8px rgba(34, 60, 80, 0.2)",
    secondaryBoxShadow: "0px 2px 4px 4px rgba(34, 60, 80, 0.2)",
  },
  fonts: {
    secondary: "'Work Sans', sans-serif",
  },
  spacing: (value) => `${4 * value}px`,
});
