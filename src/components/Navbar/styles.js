import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: "flex",
      alignItems: "start",
      paddingLeft: "2em",
    },
  }));

export default useStyles;