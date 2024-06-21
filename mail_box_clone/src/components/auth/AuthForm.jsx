import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


const AuthForm = () => {

    const [isLogIn, setIsLogIn] = useState(false);

    const switchModeToggler = () => {
        setIsLogIn((prevState) => !prevState);
    };

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [cnfPass, setCnfPass] = useState("");

    const handlerOnAuthSubmit = (e) => {
        e.preventDefault();

        console.log(mail);
        console.log(pass);
        console.log(cnfPass);
    };


    return (
        <Container className="bg-orange-300 rounded-full">
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <Card>
                        <Card.Body className="bg-blue-50">
                            <h2 className="text-center mb-4">
                                {isLogIn ? "Log In " : "Sign Up"}
                            </h2>

                            <Form onSubmit={handlerOnAuthSubmit}>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label> Email address </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                        minLength={6}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mt-3">
                                    <Form.Label> Password </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        minLength={6}
                                        required
                                    />
                                </Form.Group>

                                {!isLogIn && <Form.Group
                                    controlId="formBasicConfirmfPassword"
                                    className="mt-3"
                                >
                                    <Form.Label> Confirm Password </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={cnfPass}
                                        onChange={(e) => setCnfPass(e.target.value)}
                                        minLength={6}
                                        required
                                    />
                                </Form.Group>}


                                <Col className="text-center">
                                    <Button className={`mt-4`} variant="primary" type="submit" size="lg">
                                        {isLogIn ? "Log In" : "Sign Up"}
                                    </Button>
                                </Col>
                            </Form>
                            <p
                                className="text-center mt-3"
                                onClick={switchModeToggler}
                            >
                                {isLogIn ? (<span>
                                    Don't have an account?
                                    <button className="su_toogle"> Sign-Up Here! </button>
                                </span>)
                                    :
                                    (<span>
                                        Already have an account?
                                        <button className="su_toogle"> Log-In Here! </button>
                                    </span>)}

                            </p>

                            <button className="su_toogle">
                                Forgot Password
                            </button>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthForm;