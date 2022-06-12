import React from "react";
import { Modal, Box, Typography, Grid } from '@mui/material';
import MyButton from "../button"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
        display: "flex",
        flexFlow: "column wrap",
        gap: "20px",
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MyDeleteModal = ({ nameToDelete, isOpen, onClose, onDelete }) => {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {`¿Estás seguro que quieres eliminar ${nameToDelete}?`}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="right">
                        <MyButton className="cancel" onClick={onClose}>
                            Cancelar
                        </MyButton>
                        &nbsp;&nbsp;
                        <MyButton className="delete" onClick={onDelete}>
                            Eliminar
                        </MyButton>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}
  
export default MyDeleteModal;
