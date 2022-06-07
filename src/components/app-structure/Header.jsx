import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import ExitIcon from "@material-ui/icons/ExitToApp";
import MyButton from "../button";
import useStyles from "./Header.styles";

const Header = ({ logged }) => {
	const history = useHistory();
  const classes = useStyles();

	function logout() {
    sessionStorage.removeItem("jwt");
    window.location.reload();
  }

  const { header, headerLogo, containerLogo, headerImage } = classes;

  return (
    <header className={header}>
			<div className={headerLogo}>
			<div className={containerLogo}>
				<img className={headerImage} src={"https://i1.wp.com/www.startamericastogether.org/wp-content/uploads/2021/03/LOGO_2020_2.0_STARTER_Horizontal-01-01-1.png?fit=1307%2C435&ssl=1"} alt=""/>
			</div>
			{logged ? (
				<IconButton onClick={logout}>
					<ExitIcon style={{ color: 'white' }} />
				</IconButton>
			) : (
				<MyButton className="default" onClick={() => history.push("/login")}>
					Iniciar Sesión
				</MyButton>
			)}
			</div>
    </header>
  );
};

export default Header;
