import { ProjectPriority, ProjectStatus } from "./project.enums";

export interface AuthApiResponse {
    access_token: string;
    token_type: string;
    user: UserApi;
}

export interface UserApi {
    id: number;
    username: string;
    email: string;
    role: string;
    created_at: string;
    updated_at: string;
}

export interface ProjectApiResponse {
    id: number;
    title: string;
    status: ProjectStatus;
    description: string;
    priority: ProjectPriority;
    user_id: number;
    owner: OwnerApiResponse;
    created_at: string;
    updated_at: string;
}

export interface OwnerApiResponse {
    id: number;
    username: string;
    email: string;
    role: string;
}
