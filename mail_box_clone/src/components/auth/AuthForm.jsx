import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


const AuthForm = () => {

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">
                                Log In / Sign Up
                            </h2>
                            <Form>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label> Email address </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mt-3">
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Form.Group
                                    controlId="formBasicConfirmfPassword"
                                    className="mt-3"
                                >
                                    <Form.Label> Confirm Password </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                </Form.Group>


                                <Col className="text-center">
                                    <Button className={`mt-4`} variant="primary" type="submit" size="lg">
                                        Log In / Sign Up
                                    </Button>
                                </Col>
                            </Form>
                            <p
                                className="text-left mt-3"
                            >
                                <span>
                                    Don't have an account?
                                    <button className="su_toogle"> Sign-Up Here! </button>
                                </span>
                                <span>
                                    Already have an account?
                                    <button className="su_toogle"> Log-In Here! </button>
                                </span>
                            </p>
                            <button className="text-left su_toogle">
                                Forgot Password?
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthForm;