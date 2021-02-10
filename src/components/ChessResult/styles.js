import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  statsCard: {
      paddingTop: "2em" ,
      paddingBottom: "2em",
    //   marginLeft: "1em", 
    //   marginRight:"1em", 
      backgroundColor: "#f2f2f7", 
      borderRadius: "10px"
  },
  statsContainer:{
      marginTop: "2em", 
  },
  avatar:{
      borderRadius: "50%", 
      width: "20em", 
      height: "20em", 
      marginTop: "-10em", 
      objectFit: "cover"
  },
  gridContainer:{
      display: "flex", 
      alignItems: "center", 
      flexDirection: "column"
  },
  divContainer:{
      height: "65%", 
      backgroundColor: "white",
      marginTop: "20em"
  }
}));