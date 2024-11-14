import { Button, Table } from 'react-bootstrap';
import { useProjects } from '../../hooks/useProjects';
import { ProjectsTableRow } from './ProjectsTableRow';
import { ProjectModalForm } from './ProjectModalForm';
import { useModal } from '../../hooks';
import { FolderPlus } from 'react-bootstrap-icons';

export const ProjecsTable = () => {
    const { projects } = useProjects();
    const { open, handleOpen } = useModal();

    const handleNew = () => {
        handleOpen();
    };

    const handleClose = () => {
        handleOpen(false);
    };

    return (
        <>
            <Button variant='success' onClick={handleNew}>
                <FolderPlus />
            </Button>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Estado</th>
                        <th>Prioridad</th>
                        <th>F. Creación</th>
                        <th>F. Ult. Edición</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <ProjectsTableRow key={project.id} project={project} />
                    ))}
                </tbody>
            </Table>
            <ProjectModalForm handleClose={handleClose} open={open} />
        </>
    );
};
