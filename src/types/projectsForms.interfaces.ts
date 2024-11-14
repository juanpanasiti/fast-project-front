import { ProjectPriority, ProjectStatus } from './project.enums';

export interface ProjectForm {
    id: number;
    title: string;
    status: ProjectStatus;
    priority: ProjectPriority;
    description: string;
}
