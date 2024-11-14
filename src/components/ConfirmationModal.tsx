import { Button, Modal } from 'react-bootstrap';
import { Check2Square, XOctagonFill } from 'react-bootstrap-icons';

interface Props {
    open: boolean;
    handleClose: () => void;
    handleAccept: () => void;
    title: string;
    message: string;
}
export const ConfirmationModal = ({ open, handleClose, handleAccept, title, message }: Props) => {
    const runAcceptAndClose = () => {
        handleAccept();
        handleClose();
    };
    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='warning' onClick={() => handleClose()}>
                    <XOctagonFill />
                </Button>
                <Button variant='success' onClick={runAcceptAndClose}>
                    <Check2Square />
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
