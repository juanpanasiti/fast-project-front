import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

export const ProjectsApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};
