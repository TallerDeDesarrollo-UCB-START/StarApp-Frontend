import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	webNavigationContainer: {
		width: "100%",
		height: "70px",
	},
	mobileNavigationContainer: {
		width: "100%",
		height: "70px",
		position: "fixed",
		bottom: "0px",
	}
}));

export default useStyles;