import React, { useState, useEffect  } from "react";
import { useHistory } from "react-router-dom";
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import useStyles from "./FillDataReminder.styles";
import { getNeedToFillData } from "../../api/rename/renameAPI";

const FillDataReminder = () => {
	const classes = useStyles()
	const history = useHistory();
	const [isOpen, setIsOpen] = useState(false);

	async function callGetNeedToFillData() {
		const userId = sessionStorage.getItem("id");
		const response = await getNeedToFillData(userId);
		if (response && response.data && response.data.hasOwnProperty('needToFill')) {
			setIsOpen(response.data.needToFill);
		};
	}

	useEffect(() => {
		callGetNeedToFillData();
	}, []);

	const { reminder } = classes;
		
	return (
		<>
			{isOpen && (
				<div className={reminder}>
					<ErrorIcon color="error"/>
					<Button color="inherit" size="small" onClick={() => history.push("/cuenta")}>
						Completa tus datos
					</Button>
					<IconButton size="small" aria-label="close" color="inherit" onClick={() => setIsOpen(false)}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
			)}
		</>
	)
}
export default FillDataReminder;


