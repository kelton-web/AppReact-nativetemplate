export interface Theme {
    background: string;
    text: string;
    primary: string;
    //... autres propriétés du thème
  }
  
  export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
  }
  