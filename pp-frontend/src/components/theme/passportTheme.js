import { createMuiTheme } from '@material-ui/core/styles';

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
                backgroundColor: '#651E38',
                boxShadow:  '9px 9px 11px #280c16, -9px -9px 11px #a2305a',
                color: '#c6b5b5',
                borderRadius: '56px',
                background: 'linear-gradient(145deg, #6c203c, #5b1b32)',

            }
        },
    },
    typography: {
        fontFamily: ['Fauna One', 'serif',].join(','),
    },
});

export default passportTheme;