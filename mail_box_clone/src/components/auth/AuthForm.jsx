import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setIsUserLogIn, setLogin } from "../store/reduxStore";


const AuthForm = () => {

    const [isLogIn, setIsLogIn] = useState(false);

    const switchModeToggler = () => {
        setIsLogIn((prevState) => !prevState);
    };

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [cnfPass, setCnfPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passError, setPassError] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handlerOnAuthSubmit = async (e) => {
        e.preventDefault();

        // console.log(mail);
        // console.log(pass);
        // console.log(cnfPass);
        // // Getting data on Console Screen;

        setIsLoading(true);

        // Starting of Log-In---------------------------------------------------------------

        if (isLogIn) {
            try {

                if (!mail || !pass) {
                    throw new Error("Please fill all the fields for signup");
                }

                const response = await fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQ_IDebrsxnYopMQFsq5D2QpmQDMFoKYs",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: mail,
                            password: pass,
                            returnSecureToken: true,
                        }),
                    }
                );

                const data = await response.json();

                if (data.error)
                    throw new Error("LogIn failed : If not have account please signup ");
                else {
                    const cleanEmail = data.email.replace(/[@.]/g, "");
                    localStorage.setItem("Save-Email", cleanEmail);
                    localStorage.setItem("Save-Token", data.idToken);
                    console.log("userEmail", cleanEmail);
                    console.log("User have Successfully Logged-In");

                    dispatch(setIsUserLogIn(true));
                    dispatch(setLogin({
                        userToken: data.idToken,
                        userEmail: data.email,
                    }));

                    setMail("");
                    setPass("");
                    setIsLoading(false);
                    setError("");
                }

            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }

        }


        // Starting of Sign-Up---------------------------------------------------------------

        else {
            if (pass === cnfPass) {
                try {

                    if (!mail || !pass || !cnfPass) {
                        throw new Error("Please fill all the fields for signup");
                    }

                    const response = await fetch(
                        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQ_IDebrsxnYopMQFsq5D2QpmQDMFoKYs",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                email: mail,
                                password: pass,
                                returnSecureToken: true,
                            }),
                        }
                    );

                    const data = await response.json();

                    if (data.error) {
                        throw new Error("Signup failed: Email already exists");
                    }
                    else {
                        alert("Successfully SignedUp. You can Login now.");
                        console.log("User have Successfully SignedUp");
                        setMail("");
                        setPass("");
                        setCnfPass("");
                        setIsLoading(false);
                        setError("");
                    }
                } catch (error) {
                    console.log(error.message);
                    setError(error.message);
                }
            }
            else {
                setPassError("Passwords do not match");
            }

        }
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

                                {passError && <p className="text-danger"> {passError} </p>}

                                {error && <p className="text-danger"> {error} </p>}

                                {isLoading ? (<center>
                                    <div className="spinner-border m-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </center>)
                                    : (<Col className="text-center">
                                        <Button className={`mt-4`} variant="primary" type="submit" size="lg">
                                            {isLogIn ? "Log In" : "Sign Up"}
                                        </Button>
                                    </Col>)}

                                {/* <Col className="text-center">
                                    <Button className={`mt-4`} variant="primary" type="submit" size="lg">
                                        {isLogIn ? "Log In" : "Sign Up"}
                                    </Button>
                                </Col> */}

                            </Form>
                            <p
                                className="text-center mt-3"
                                onClick={switchModeToggler}
                            >
                                {isLogIn ? (<span>
                                    Don't have an account?
                                    <button className="su_toogle hover:bg-blue-100 ml-2"> Sign-Up Here! </button>
                                </span>)
                                    :
                                    (<span>
                                        Already have an account?
                                        <button className="su_toogle hover:bg-blue-100 ml-2"> Log-In Here! </button>
                                    </span>)}

                            </p>

                            <p className="text-center mt-3 hover:bg-blue-200">
                                <button className="su_toogle">
                                    Forgot Password
                                </button>
                            </p>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthForm;