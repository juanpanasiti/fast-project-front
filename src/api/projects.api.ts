import { Endpoints } from '../enums';
import { Project, ProjectForm } from '../types';
import { ProjectApiResponse } from '../types/api.interfaces';
import apiClient from './apiClient';
import { parseNewProjectDataToApi, parseProjectDataToApi, parseProjectResponseFromApi } from './parsers';

export const callGetAllProjectsApi = async (): Promise<Project[]> => {
    const { data } = await apiClient.get<ProjectApiResponse[]>(Endpoints.PROJECTS);

    return data.map(parseProjectResponseFromApi);
};

export const callAddNewProjectsApi = async (projectData: ProjectForm): Promise<Project> => {
    const { data } = await apiClient.post<ProjectApiResponse>(
        Endpoints.PROJECTS,
        parseNewProjectDataToApi(projectData)
    );
    return parseProjectResponseFromApi(data);
};

export const callUpdateProjectsApi = async (projectData: ProjectForm): Promise<Project> => {
    const { data } = await apiClient.patch<ProjectApiResponse>(`${Endpoints.PROJECTS}/${projectData.id}`, parseProjectDataToApi(projectData));
    return parseProjectResponseFromApi(data);
};

export const callDeleteProjectsApi = async (projectId: number) => {
    await apiClient.delete(`${Endpoints.PROJECTS}/${projectId}`);
};
