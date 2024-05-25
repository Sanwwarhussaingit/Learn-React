import { useContext, createContext } from "react";

//build a context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;


export default function useTheme(){
    
    return useContext(ThemeContext);
}