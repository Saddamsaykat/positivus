import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const themes = [
  "light",
  "dark",
  "blue",
  "green",
  "magenta",
  "orange",
  "purple",
  "red",
  "teal",
  "yellow",
];

// Safely get initial theme from localStorage
const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && themes.includes(storedTheme)) {
      return storedTheme;
    }
  }
  return "light";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      if (themes.includes(action.payload)) {
        state.theme = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", action.payload);
        }
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;