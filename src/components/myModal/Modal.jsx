import React from 'react';
import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
	display: "flex",
	flexFlow: "column wrap",
	gap: "20px",
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ isOpen, onClose, children }) => {
  return (
		<Modal open={isOpen} onClose={onClose}>
			<Box sx={style}>
				{children}
			</Box>
		</Modal>
  );
}

export default MyModal;
