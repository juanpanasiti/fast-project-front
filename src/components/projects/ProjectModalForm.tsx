import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useForm, useProjects } from '../../hooks';
import { Project, ProjectForm, ProjectPriority, ProjectStatus } from '../../types';

interface Props {
    open: boolean;
    handleClose: () => void;
    project?: Project;
}


const getProjectForm = (project?: Project): ProjectForm => {
    return {
        id: project?.id || 0,
        title: project?.title || '',
        description: project?.description || '',
        status: project?.status || ProjectStatus.NEW,
        priority: project?.priority || ProjectPriority.LOW,
    };
};
export const ProjectModalForm = ({ open, handleClose, project }: Props) => {
    const { handleChange, values } = useForm<Partial<ProjectForm>>({});
    const { addNewProject, editProject } = useProjects();
    const isNew: boolean = !project;

    const handleSave = () => {
        try {
            const currentData = getProjectForm(project);
            if (isNew) {
                addNewProject({ ...currentData, ...values });
            } else {
                editProject({ ...currentData, ...values });
            }
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formGridTitle'>
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                placeholder='Título del proyecto'
                                defaultValue={project?.title}
                                onChange={(e) => handleChange('title', e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formGridStatus'>
                            <Form.Label>Estado</Form.Label>
                            <Form.Select defaultValue={project?.status} onChange={(e) => handleChange('status', e.target.value as ProjectStatus)}>
                                <option value={ProjectStatus.NEW}>Nuevo</option>
                                <option value={ProjectStatus.IN_PROGRESS}>En progreso</option>
                                <option value={ProjectStatus.ON_HOLD}>En espera</option>
                                <option value={ProjectStatus.FINISHED}>Terminado</option>
                                <option value={ProjectStatus.CANCELLED}>Cancelado</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId='formGridPriority'>
                            <Form.Label>Prioridad</Form.Label>
                            <Form.Select
                                defaultValue={project?.priority || ProjectPriority.MEDIUM}
                                onChange={(e) => handleChange('priority', e.target.value as ProjectPriority)}
                            >
                                <option value={ProjectPriority.LOW}>Baja</option>
                                <option value={ProjectPriority.MEDIUM}>Media</option>
                                <option value={ProjectPriority.HIGH}>Alta</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formGridDescription'>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                defaultValue={project?.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant='primary' onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
