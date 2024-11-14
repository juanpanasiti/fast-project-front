import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../pages/auth';
import { Container } from 'react-bootstrap';
import { getToken, getUserData } from '../helpers';

export const PublicRouter = () => {
    const userData = getUserData();
    const isLoggedIn = !!getToken() && !!userData;
    const lastPath = localStorage.getItem('lastPath') || '/';
    if (isLoggedIn) {
        return <Navigate to={lastPath} />;
    }
    return (
        <Container>
            <Routes>
                <Route path='signin' element={<LoginPage />} />
                <Route path='signup' element={<RegisterPage />} />
                <Route path='/*' element={<Navigate to='/' />} />
            </Routes>
        </Container>
    );
};
