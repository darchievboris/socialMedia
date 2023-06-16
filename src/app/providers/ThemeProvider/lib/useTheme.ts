import  {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContent} from "./ThemeContext";
import {Theme} from "app/App";

interface UseThemeResult{
    toggleTheme: ()=>void,
    theme:Theme;
}
const useTheme = ():UseThemeResult => {
    const {theme,setTheme} = useContext(ThemeContent);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)
    };
    return {
        theme,
        toggleTheme
    }
};

export default useTheme;
