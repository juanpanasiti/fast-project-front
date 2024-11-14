import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProjectsApp } from './ProjectsApp';

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ProjectsApp />
    </StrictMode>
);