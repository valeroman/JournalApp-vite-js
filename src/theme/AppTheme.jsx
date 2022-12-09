import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { purpleTheme } from './purpleTheme';
import { matrixTheme } from './matrixTheme';


export const AppTheme = ({ children }) => {
    
    return (
        <ThemeProvider theme={ matrixTheme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
