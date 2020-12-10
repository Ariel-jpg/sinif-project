import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const SinifDialogComponent = ({
    title,
    content,
    open,
    handleClose,
    handleConfirm,
    handleChange,
    confirmButton = "Confimar",
    cancelButton = "Cancelar"
}) => <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            {content && <DialogContentText children={content} />}
            <TextField
                autoFocus
                onChange={handleChange}
                margin="dense"
                label="Código de la clase"
                type="filled"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={() => { handleClose(); handleConfirm() }} color="primary" children={confirmButton} />
            <Button onClick={handleClose} color="primary" children={cancelButton} />
        </DialogActions>
    </Dialog>


export const SinifSendDialogComponent = ({
    title,
    content,
    open,
    handleClose,
    handleConfirm,
    confirmButton = "Confimar",
    cancelButton = "Cancelar",
    component: Component
}) => <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            {content && <DialogContentText children={content} />}
            {Component}
        </DialogContent>
        <DialogActions>
            <Button onClick={() => { handleClose(); handleConfirm() }} color="primary" children={confirmButton} />
            <Button onClick={handleClose} color="primary" children={cancelButton} />
        </DialogActions>
    </Dialog>