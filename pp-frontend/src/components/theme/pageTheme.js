import { createMuiTheme } from '@material-ui/core/styles';
import {spacing} from "@material-ui/system";

const passportTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#D4AF37',
        },
        secondary: {
            main: '#e2e6e9',
        },
        background: {
            default: '#e2e6e9',
        },
    },
    overrides: {
        MuiButton: {
            text: {
                backgroundColor: '#e2e6e9',
                boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
                color: '#c6b5b5',
                borderRadius: '56px',
                background: 'linear-gradient(145deg, #cbcfd2, #f2f6f9);',

            }
        },


    }
});

export default passportTheme;