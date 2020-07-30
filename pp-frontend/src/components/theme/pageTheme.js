import { createMuiTheme } from '@material-ui/core/styles';
import {spacing} from "@material-ui/system";

const passportTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#D4AF37',
        },
        secondary: {
            main: '#651E38',
        },
        background: {
            default: '#651E38',
        },
    },
    overrides: {
        MuiButton: {
            text: {
                backgroundColor: '#e2e6e9',
                boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
                color: '#c6b5b5',
                borderRadius: '56px',
                background: 'linear-gradient(145deg, #6c203c, #5b1b32)',

            }
        },


    }
});

export default passportTheme;