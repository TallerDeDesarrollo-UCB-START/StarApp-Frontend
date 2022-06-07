import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	recordatorioStyle: {
		position:"fixed",
		bottom:"5%",
		left:"37%",        
		background:"#F2F2F2",
		borderRadius:"10px",
		width:"26%",
		height:"40px",
		display: 'flex',
		alignItems: 'center',  
		"@media (max-Width: 1115px)": {
			width:"90%",
			left:"5%",
			bottom:"100px",
		}     
	},
	marginRL5:{
		marginLeft:"10px",
		marginRight:"10px"
	},
	closeIco:{
		marginLeft:"auto",  
	}
}));

export default useStyles;