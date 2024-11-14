import { ProjectPriority, ProjectStatus } from "./project.enums";

export interface ProjectsStore {
    projects: Project[];

    setProjects: (projects: Project[]) => void;
    addProject: (project: Project) => void;
    updateProject: (project: Project) => void;
    deleteProject: (projecId: number) => void;
    emptyProjects: () => void;
}

export interface Project {
    id: number;
    title: string;
    status: ProjectStatus;
    priority: ProjectPriority;
    description: string;
    userId: number;
    owner: string;
    createdAt: string;
    updatedAt: string;
}
