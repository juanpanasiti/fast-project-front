import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { SignInForm } from '../../types';
import { useAuth, useForm } from '../../hooks';
import { Link } from 'react-router-dom';

const initialValues: SignInForm = {
    username: '',
    password: '',
};
export const LoginPage = () => {
    const { values, handleChange } = useForm<SignInForm>(initialValues);
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(values);
    };

    return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
            <Row>
                <Col md={12}>
                    <Card className='p-4 shadow-sm'>
                        <Card.Body>
                            <h3 className='text-center mb-4'>Iniciar sesión</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId='username' className='mb-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Ingrese su username'
                                        required
                                        onChange={(e) => handleChange('username', e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId='password' className='mb-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='Ingrese su password'
                                        required
                                        onChange={(e) => handleChange('password', e.target.value)}
                                    />
                                </Form.Group>

                                <Button variant='primary' type='submit' className='w-100'>
                                    Iniciar sesión
                                </Button>
                                <p className='mt-3'>
                                    ¿No tienes cuenta? <Link to='/auth/signup'>Crea una aquí</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
