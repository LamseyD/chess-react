import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  statsCard: {
      paddingTop: "2em" ,
      paddingBottom: "2em",
    //   marginLeft: "1em", 
    //   marginRight:"1em", 

  },
  statsContainer:{
      marginTop: "2em", 
      backgroundColor: "#f2f2f7", 
      borderRadius: "10px"

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