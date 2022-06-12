import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	home_container: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "center"
	},
	home_content: {
		display: "flex",
		flexFlow: "row wrap",
		gap: "20px"
	},
	fill_data_reminder: {
		display: "flex",
		justifyContent: "center",
	}
}));

export default useStyles;