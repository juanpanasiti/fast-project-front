import { Project } from '../../types/projectsStore.interfaces';
import { Button } from 'react-bootstrap';
import { ProjectModalForm } from './ProjectModalForm';
import { useModal, useProjects } from '../../hooks';
import { Eye, Pencil, Trash3 } from 'react-bootstrap-icons';
import { ConfirmationModal } from '../ConfirmationModal';
import { ProjectModalShow } from './ProjectModalShow';

interface Props {
    project: Project;
}
export const ProjectsTableRow = ({ project }: Props) => {
    const { open: openShow, handleOpen: handleOpenShow } = useModal();
    const { open: openEdit, handleOpen: handleOpenEdit } = useModal();
    const { open: openDelete, handleOpen: handleOpenDelete } = useModal();
    const { removeProject } = useProjects();

    const handleEdit = () => {
        handleOpenEdit(true);
    };
    const handleShow = () => {
        handleOpenShow(true);
    };
    const handleDelete = () => {
        handleOpenDelete(true)
    };
    return (
        <tr>
            <td>{project.title}</td>
            <td>{project.status}</td>
            <td>{project.priority}</td>
            <td>{project.createdAt.slice(0,10)}</td>
            <td>{project.updatedAt.slice(0,10)}</td>
            <td>
                <Button variant='warning' className='me-2' onClick={handleEdit}>
                    <Pencil />
                </Button>
                <Button variant='danger' className='me-2' onClick={handleDelete}>
                    <Trash3 />
                </Button>
                <Button variant='info' className='me-2' onClick={handleShow}>
                    <Eye />
                </Button>
            </td>
            <ProjectModalForm handleClose={() => handleOpenEdit(false)} open={openEdit} project={project} />
            <ProjectModalShow handleClose={() => handleOpenShow(false)} open={openShow} project={project} />
            <ConfirmationModal
                open={openDelete}
                handleClose={() => handleOpenDelete(false)}
                handleAccept={() => removeProject(project)}
                title='Confirmación de borrado'
                message='¿Realmente desea borrar el proyecto? esta acción no se puede deshacer.'
            />
        </tr>
    );
};
