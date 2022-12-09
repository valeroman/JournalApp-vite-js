import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const matrixTheme = createTheme({
    palette: {
        primary: {
            main: '#020204'
        },
        secondary: {
            main: '#22b455'
        },
        
        error: {
            main: red.A400
        }
    }
});