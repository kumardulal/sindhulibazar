import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmModal({ open, handleClose }) {

 
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"How to make a purchase with Sindhuli Bazar Express [ ONLY AVAILABLE FOR SINDHULI MADHI]"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          step-1: select the quantity of item you want to purchase [Service only available for Sindhuli Madhi]
          <p/> step-2: click on -Order with Whatsapp- Button and continue to chat
          <p/> step-3: you will be in dealer message box, forward the already typed order message and wait for Confirmation
        <p/> step-4: Once you get the confirm message- send the payment to the qr provided in chat 
        <p/> step-5: Share  your live location in the chat and address details
        <p/> step-6: Your delivey will be on your door step in a while
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}