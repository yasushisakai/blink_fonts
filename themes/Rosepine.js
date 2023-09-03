/*
 * author: Yasushi Sakai
 */

// nord colors
// const nord = {
//   nord0: "#2E3440",
//   nord1: "#3B4252",
//   nord2: "#434C5E",
//   nord3: "#4C566A",
//   nord4: "#D8DEE9",
//   nord5: "#E5E9F0",
//   nord6: "#ECEFF4",
//   nord7: "#8FBCBB",
//   nord8: "#88C0D0",
//   nord9: "#81A1C1",
//   nord10: "#5E81AC",
//   nord11: "#BF616A",
//   nord12: "#D08770",
//   nord13: "#EBCB8B",
//   nord14: "#A3BE8C",
//   nord15: "#B48EAD",
// };

const rosepine = {
  base: "#191724",
  surface: "#1f1d2e",
  overlay: "#26233a",
  muted: "#6e6a86",
  subtle: "#908caa",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ebbcba",
  pine: "#31748f",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  hl_low: "#21202e",
  hl_med: "#403d52",
  hl_high: "#524f67",
};

const rosepine_moon = {
  base: "#232136",
  surface: "#2a273f",
  overlay: "#393552",
  muted: "#6e6a86",
  subtle: "#908caa",
  text: "#e0def4",
  love: "#eb6f92",
  gold: "#f6c177",
  rose: "#ea9a97",
  pine: "#3e8fb0",
  foam: "#9ccfd8",
  iris: "#c4a7e7",
  hl_low: "#2a283e",
  hl_med: "#44415a",
  hl_high: "#56526e",
};

const colors = {
  black: rosepine.overlay,
  red: rosepine.love,
  green: rosepine.pine,
  yellow: rosepine.gold,
  blue: rosepine.foam,
  magenta: rosepine.iris,
  cyan: rosepine.rose,
  white: rosepine.hl_high,
  lightBlack: rosepine.muted,
  lightRed: rosepine_moon.love,
  lightGreen: rosepine_moon.pine,
  lightYellow: rosepine_moon.gold,
  lightBlue: rosepine_moon.foam,
  lightMagenta: rosepine_moon.iris,
  lightCyan: rosepine_moon.rose,
  lightWhite: rosepine_moon.hl_high,

  backgroundColor: rosepine.base,
  foregroundColor: rosepine.text,
  // cursorColor: rosepine.text,
};

t.prefs_.set("color-palette-overrides", [
  colors.black,
  colors.red,
  colors.green,
  colors.yellow,
  colors.blue,
  colors.magenta,
  colors.cyan,
  colors.white,
  colors.lightBlack,
  colors.lightRed,
  colors.lightGreen,
  colors.lightYellow,
  colors.lightBlue,
  colors.lightMagenta,
  colors.lightCyan,
  colors.lightWhite,
]);

t.prefs_.set("cursor-color", "rgba(110, 106, 134, 0.5)");
t.prefs_.set("foreground-color", colors.foregroundColor);
t.prefs_.set("background-color", colors.backgroundColor);
