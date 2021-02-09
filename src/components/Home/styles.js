import { makeStyles } from '@material-ui/core/styles';

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