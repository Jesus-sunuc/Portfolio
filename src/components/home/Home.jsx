import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./home.css";
import myLogo from "../img/logo.png";
import myPhoto from "../img/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCog, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
    return (
        <html>
            <body>
                <header>
                    <div className="container">
                        <nav class="navbar navbar-expand-md bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-bran" href="#">
                                    <img className="logo" src={myLogo} alt="Logo" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon text-light"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav d-flex flex-column flex-md-row">
                                        <li class="nav-item nav-item1">
                                            <a class="nav-link" aria-current="page" href="#home">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-item2" href="#projects">Projects</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-item3" href="#experience">Experience</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link nav-item4" href="#contact">Contact</a>
                                        </li>
                                        <li class="nav-item dropdown nav-item5">
                                            <a class="nav-link dropdown-toggle nav-item6" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Options
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li className="dropDownOpt"><a class="dropdown-item" href="#">Resume/CV</a></li>
                                                <li className="dropDownOpt"><a class="dropdown-item" href="#">Awards</a></li>
                                                <li className="dropDownOpt"><a class="dropdown-item" href="#">Services</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <main>
                    <section id="home">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="home-content">
                                        <h1 className="home-title">Hello, I'm <span>Jesús Sunuc</span></h1>
                                        <p className="home-desc">
                                            A Web Developer specializing in Frontend development, creating user interfaces for websites and web apps that contribute significantly to the product's overall success.
                                        </p>
                                        <div className="homeButton text-left">
                                            <Button as="a" href="#contact">Projects</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="home-img">
                                        <div className="img-box">
                                            <img className="myPhoto" src={myPhoto} alt="home" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="projects">
                        <div className="container">
                            <h1 className="projectTitle1">Projects</h1>
                            <div className="row text-center justify-content-between">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="projectsCard">
                                        <Card>
                                            <FontAwesomeIcon className="icon" icon={faUser} />
                                            <Card.Body>
                                                <Card.Title className="projectTit">Spring 2023</Card.Title>
                                                <Card.Text className="projectDesc">
                                                    Operating Systems: It introduces to the various components that comprise a modern operating system.
                                                </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className="projectTitle">C#</ListGroup.Item>
                                                <ListGroup.Item className="projectTitle">HTML5</ListGroup.Item>
                                                <ListGroup.Item className="projectTitle">CSS</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Card.Link href="https://github.com/Jesus-sunuc/Spring2023" target="_blank">Github</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="projectsCard">
                                        <Card>
                                            <FontAwesomeIcon className="icon" icon={faSave} />
                                            <Card.Body>
                                                <Card.Title className="projectTit">Fall 2022</Card.Title>
                                                <Card.Text className="projectDesc">
                                                    Data Structures and Algorithms: It covers data structures and algorithms in some depth.
                                                </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className="projectTitle">C#</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Card.Link href="https://github.com/Jesus-sunuc/Fall2022" target="_blank">Github</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="projectsCard">
                                        <Card>
                                            <FontAwesomeIcon className="icon" icon={faCog} />
                                            <Card.Body>
                                                <Card.Title className="projectTit">Summer 2022</Card.Title>
                                                <Card.Text className="projectDesc">
                                                    Object-Oriented Programming: It introduces the concepts of object-oriented programming.                                            </Card.Text>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className="projectTitle">C#</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Card.Link href="https://github.com/Jesus-sunuc/Summer2022" target="_blank">Github</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className="space">
                                <Button as="a" href="#" target="_blank">View Full Project Archive</Button>{' '}
                            </div>
                        </div>
                    </section>
                    <section id="experience">
                        <div className="container">
                            <h1 className="projectTitle1">Experience</h1>
                            <div className="row justify-content-between">
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="cardSpace">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Leadership</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Click me</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="cardSpace">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Computer Skills</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Click me</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div className="cardSpace">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Card.Link href="#">Click me</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="space">
                                    <Button as="a" href="#" target="_blank">View Full Resumé</Button>{' '}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <h1 className="contactTitle">Contact</h1>
                                    <h3>
                                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
                                    </h3>
                                    <div className="formStyle">
                                        <Form className="formSize">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" required />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                            <Button type="submit">Submit</Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6">
                                <h4 className="footer-text">
                                    &copy; 2024 Jesús Sunuc. All Rights Reserved.
                                </h4>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="social-icons">
                                    <ul className="d-flex justify-content-center">
                                        <li>
                                            <a href="https://www.linkedin.com/in/jes%C3%BAs-sunuc-aa052a202/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Jesus-sunuc" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100013493732389" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/jesus_st6/"><FontAwesomeIcon icon={faInstagram} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}

export default Home