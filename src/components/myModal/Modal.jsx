import React from 'react';
import { Modal, Box } from '@mui/material';
import { useMediaQuery } from "@material-ui/core";
//width:"80%"
const MyModal = ({ isOpen, onClose, children }) => {
  const smallScreen = !useMediaQuery("(min-width:600px)");
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: "flex",
    flexFlow: "column wrap",
    gap: "20px",
    padding:"10px",
    transform: 'translate(-50%, -50%)',
    width: smallScreen? 325:550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };
  return (
		<Modal open={isOpen} onClose={onClose} >
			<Box sx={style}>
				{children}
			</Box>
		</Modal>
  );
}

export default MyModal;
