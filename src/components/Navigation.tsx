import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../hooks';
import { DoorOpen } from 'react-bootstrap-icons';

export const Navigation = () => {
    const { logout } = useAuth();
    return (
        <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#home'>Fast-Projects</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {/* TODO: Agregar botones a distintas páginas */}
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link onClick={logout}>
                            <DoorOpen /> Cerrar Sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
