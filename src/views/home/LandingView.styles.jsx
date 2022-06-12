import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	card_container: {
		border: "none",
		boxShadow: "none"
	},
	card_content: {
		padding: "6% 8.5%",
		textAlign: "justify"
	},
	card_content_text: {
		[theme.breakpoints.down('xs')]: {
			fontSize: "16px"
		},
	},
	card_actions: {
		display: "flex",
		flexDirection:"column",
		alignItems:"center",
		justifyContent: "center",
		gap: "10px",
		padding: "0 7%",
		paddingBottom: "30px",
		textAlign: "justify"
	},
}));

export default useStyles;
