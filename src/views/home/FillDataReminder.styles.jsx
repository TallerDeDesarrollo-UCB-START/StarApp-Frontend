import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	reminder: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.up('xs')]: {
			gap: "100px",
    },
    [theme.breakpoints.down('xs')]: {
			gap: "10px",
    },
		paddingLeft: "10px",
		paddingRight: "10px",
		position: "fixed",
		bottom: "12%",
		backgroundColor:"#F2F2F2",
		borderRadius:"10px",
	}
}));

export default useStyles;