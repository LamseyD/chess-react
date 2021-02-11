import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

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
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '400px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));

export default useStyles;