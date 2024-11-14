import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Project, ProjectsStore } from '../../types/projectsStore.interfaces';

export const useProjectsStore = create<ProjectsStore>()(
    devtools(
        (set, get) => ({
            projects: [],

            setProjects: (projects: Project[]) => {
                set({ projects });
            },
            addProject: (project: Project) => {
                const projects = get().projects;
                set({ projects: [...projects, project] });
            },
            updateProject: (project: Project) => {
                const projects = get().projects.map( p => p.id === project.id ? project : p)
                set({projects})
            },
            deleteProject: (projectId: number) => {
                const projects = get().projects.filter( project => project.id !== projectId)
                set({projects})
            },
            
            emptyProjects: () => set({ projects: [] }),
        }),
        { name: 'ProjectsStore' }
    )
);
