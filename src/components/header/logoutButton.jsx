import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Fade, Paper, Popper} from '@material-ui/core'
import { useHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import MyButton from '../../shared/components/Button';

const useStyles = makeStyles((theme)=> ({
    registerButton: {
        marginRight:"5px",
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
            <MyButton className="default" onClick={()=>history.push("/login")}>
                Iniciar Sesión
            </MyButton>
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
                <Chip label={sessionData.name.lenght<8?sessionData.name:sessionData.name.split(" ").map((pal)=>(pal[0])).join("").toUpperCase()} 
                color="primary" 
                avatar={<Avatar src={sessionData.foto_url?sessionData.foto_url:"https://i.pinimg.com/originals/14/a8/cd/14a8cd8c46df11082f60ae15b97f47ff.jpg"} />} 
                clickable
                onClick={handleClick('bottom')}
                style={{marginRight:"0"}}
                />
            </div>
        )
    )
}

export default LogoutButton
