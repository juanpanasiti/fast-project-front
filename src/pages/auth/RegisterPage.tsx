import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { SignUpForm } from '../../types';
import { useAuth, useForm } from '../../hooks';
import { Link } from 'react-router-dom';

const initialValues: SignUpForm = {
    username: '',
    email: '',
    password: '',
};

export const RegisterPage = () => {
    const { values, handleChange } = useForm<SignUpForm>(initialValues);
    const { register } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(values);
    };

    return (
        <Container className='d-flex justify-content-center align-items-center vh-100'>
            <Row>
                <Col md={12}>
                    <Card className='p-4 shadow-sm'>
                        <Card.Body>
                            <h3 className='text-center mb-4'>Crear cuenta</h3>
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

                                <Form.Group controlId='email' className='mb-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='Ingrese su email'
                                        required
                                        onChange={(e) => handleChange('email', e.target.value)}
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
                                    Registrarse
                                </Button>
                                <p className='mt-3'>
                                    ¿Ya tienes cuenta? <Link to='/auth/login'>Inicia sesión aquí</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
