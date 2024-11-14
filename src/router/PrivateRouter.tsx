import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { Navigation } from '../components';
import { Container } from 'react-bootstrap';
import { getToken, getUserData } from '../helpers';
import { useProjects } from '../hooks/useProjects';
import { useEffect, useRef } from 'react';
import { useAuthStore } from '../stores/auth/auth.store';

export const PrivateRouter = () => {
    const userData = getUserData();
    const isLoggedIn = !!getToken() && !!userData;
    const { getProjects } = useProjects();
    const { setUserData } = useAuthStore();
    const getProjectsRef = useRef(getProjects);
    const setUserDataRef = useRef(() => setUserData(userData));

    useEffect(() => {
        if (isLoggedIn) {
            getProjectsRef.current();
            setUserDataRef.current();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <Navigate to='/auth/signin' />;
    }
    return (
        <>
            <Navigation />
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Container>
        </>
    );
};
