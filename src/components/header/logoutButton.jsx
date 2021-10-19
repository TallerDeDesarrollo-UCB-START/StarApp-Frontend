import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Fade, Paper, Popper} from '@material-ui/core'
import { useHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme)=> ({
    loginButton: {
        width:"10%", 
        marginRight:"30px",
    },
}))

const LogoutButton = ({logged, sessionData}) => {
    const classes = useStyles()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };
    return (
        (!logged)?(
            <Button 
                className={classes.loginButton} 
                variant="contained"
                onClick={()=>history.push("/login")}>
                    Login
            </Button>
        ):(
            <div>
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Button 
                            onClick={()=>{
                                sessionStorage.removeItem("jwt")
                                window.location.reload()}
                            }>
                                Logout
                            </Button>
                        </Paper>
                    </Fade>
                    )}
                </Popper>
                <Chip label={sessionData.name} 
                color="primary" 
                avatar={<Avatar src="../../images/PerfilDefault.jpg" />} 
                clickable
                onClick={handleClick('bottom')}
                />
            </div>
        )
    )
}

export default LogoutButton
