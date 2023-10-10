export interface Theme {
    background: string;
    surface: string;
    card: string;
  
    text: string;
    secondaryText: string;
  
    primary: string;
    secondary: string;
  
    error: string;
    warning: string;
  
    info: string;
    success: string;
  
    border: string;
    divider: string;
  
    headerBackground: string;
    headerText: string;
  
    tabBarBackground: string;
    tabBarIcon: string;

  }
  
  
  export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
  }
  