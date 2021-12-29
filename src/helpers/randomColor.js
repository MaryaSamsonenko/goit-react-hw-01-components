function getRandomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function getRandomRGBColor() {
  return `rgb(${getRandomIntegerFromInterval(0, 255)},
    ${getRandomIntegerFromInterval(0, 255)},
    ${getRandomIntegerFromInterval(0, 255)})`;
}
