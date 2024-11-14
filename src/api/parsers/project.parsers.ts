import { Project, ProjectApiResponse, ProjectForm } from '../../types';

type NewProjectForm = Pick<Project, 'title' | 'status' | 'priority' | 'description'>;

export const parseProjectDataToApi = (projectData: Partial<Project>): Partial<ProjectForm> => {
    const formData: Partial<ProjectForm> = {};
    if (projectData.title) formData.title = projectData.title;
    if (projectData.status) formData.status = projectData.status;
    if (projectData.priority) formData.priority = projectData.priority;
    if (projectData.description) formData.description = projectData.description;
    return formData;
};
export const parseNewProjectDataToApi = (projectData: ProjectForm): NewProjectForm => {
    return {
        title: projectData.title,
        description: projectData.description,
        priority: projectData.priority,
        status: projectData.status,
    }
};

export const parseProjectResponseFromApi = (projectResponse: ProjectApiResponse): Project => {
    return {
        id: projectResponse.id,
        title: projectResponse.title,
        status: projectResponse.status,
        description: projectResponse.description,
        priority: projectResponse.priority,
        userId: projectResponse.user_id,
        createdAt: projectResponse.created_at,
        updatedAt: projectResponse.updated_at,
        owner: projectResponse.owner.username,
    }
}

