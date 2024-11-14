import { Button, Modal, Card } from 'react-bootstrap';
import { Project } from '../../types';

interface Props {
    project: Project;
    open: boolean;
    handleClose: () => void;
}
export const ProjectModalShow = ({ project, open, handleClose }: Props) => {
    return (
        <Modal show={open} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <Card.Text>
                            <strong>Estado:</strong> {project.status}
                        </Card.Text>
                        <Card.Text>
                            <strong>Prioridad:</strong> {project.priority}
                        </Card.Text>
                        <Card.Text>
                            <strong>Creado en:</strong> {project.createdAt.slice(0,10)}
                        </Card.Text>
                        <Card.Text>
                            <strong>Actualizado en:</strong> {project.updatedAt.slice(0,10)}
                        </Card.Text>
                        <Card.Text as='p' className='mt-3'>
                            <strong>Descripción:</strong> {project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
