import { callAddNewProjectsApi, callDeleteProjectsApi, callGetAllProjectsApi, callUpdateProjectsApi } from '../api';
import { useProjectsStore } from '../stores/projects/projects.store';
import { Project, ProjectForm } from '../types';
import { AxiosError } from 'axios';
import { useAuth } from './useAuth';

export const useProjects = () => {
    const projects = useProjectsStore((store) => store.projects);
    const { logout } = useAuth();
    const setProjects = useProjectsStore((store) => store.setProjects);
    const addProject = useProjectsStore((store) => store.addProject);
    const updateProject = useProjectsStore((store) => store.updateProject);
    const deleteProject = useProjectsStore((store) => store.deleteProject);

    const getProjects = async () => {
        try {
            const projects: Project[] = await callGetAllProjectsApi();
            setProjects(projects);
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                _handleAxiosError(error);
            } else {
                throw error;
            }
        }
    };

    const addNewProject = async (project: ProjectForm) => {
        try {
            const newProject: Project = await callAddNewProjectsApi(project);
            addProject(newProject);
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                _handleAxiosError(error);
            } else {
                throw error;
            }
        }
    };

    const editProject = async (project: ProjectForm) => {
        try {
            const updatedProject: Project = await callUpdateProjectsApi(project);
            updateProject(updatedProject);
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                _handleAxiosError(error);
            } else {
                throw error;
            }
        }
    };

    const removeProject = async (project: ProjectForm) => {
        try {
            await callDeleteProjectsApi(project.id);
            deleteProject(project.id);
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                _handleAxiosError(error);
            } else {
                throw error;
            }
        }
    };

    const _handleAxiosError = (error: AxiosError) => {
        if (error.response && [401, 403].includes(error.response.status)) {
            logout();
        }
    };
    return {
        projects,
        getProjects,
        addNewProject,
        editProject,
        removeProject,
    };
};
