import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  maxWidth: DialogProps['maxWidth'];
  children: JSX.Element | JSX.Element[];
}

const Modal = ({
  open,
  setOpen,
  modalTitle,
  children,
  maxWidth,
}: ModalProps) => (
  <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth}>
    <DialogTitle>{modalTitle}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
export { Modal };
