import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({

    multilineColor:{
        color:'#ffffff'
    },
    textStyle: {
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "90%"
    }
}));

export default useStyles;