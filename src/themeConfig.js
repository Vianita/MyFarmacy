import { createMuiTheme } from '@material-ui/core/styles';
import {  } from '@material-ui/core/styles/createPalette';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#90caf9',
            main: '#2196f3',
            dark: '#1565c0',
            contrastText: '#ffffff'

        },
        secondary: {
            light: '#b9f6ca',
            main: '#00e676',
            dark: '#00c853',
            contrastText: '#ffffff'
        },
    }

})

export default theme;