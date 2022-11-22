import React, { useState } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme:() => {}
});

const ThemeProvider = ({children}) => {
    const [light, setLight] = useState(true);
    const toggleTheme = () => setLight(!light);
    const theme = light ? themes.light : themes.dark;
    const defaultTheme = {
        toggleTheme,
        theme
    };
    return (
    <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
    )
};

export default ThemeProvider 