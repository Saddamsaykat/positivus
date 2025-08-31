export const getThemeStyles = (theme: string) => ({
  backgroundColor:
    theme === "dark" ? "#1a202c" :
    theme === "blue" ? "#2b6cb0" :
    theme === "green" ? "#2f855a" :
    theme === "magenta" ? "#be31ac" :
    theme === "orange" ? "#df7c20" :
    theme === "yellow" ? "#d69e2e" : // Fixed yellow color
    theme === "red" ? "#e53e3e" :
    theme === "purple" ? "#633399" :
    theme === "teal" ? "#319795" : // Fixed teal color
    "#edf2f7",

  color:
    theme === "dark" ? "#ffffff" :
    theme === "blue" ? "#ebf8ff" :
    theme === "green" ? "#f0fff4" :
    theme === "magenta" ? "#fdf2f8" :
    theme === "orange" ? "#fffaf0" :
    theme === "yellow" ? "#fffff0" :
    theme === "red" ? "#ffffff" :
    theme === "purple" ? "#ffffff" :
    theme === "teal" ? "#e6fffa" :
    "#1a202c",
});

export const themes = [
  "light", "dark", "blue", "green", "magenta",
  "orange", "purple", "red", "teal", "yellow"
];