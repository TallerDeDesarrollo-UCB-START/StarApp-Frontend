import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	header: {
		flexDirection: "column",
		width: "100%",
		position: "sticky",
		backgroundColor: "#074d81",
	},
	headerLogo: {
		display: "flex",
		height: "80px",
		alignItems: "center",
		justifyContent: "center"
	},
	headerMenu: {
		marginTop: "60px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	containerLogo: {
		width: "80%",
		display: "flex",
		justifyContent: "center",
	},
}));

export default useStyles;