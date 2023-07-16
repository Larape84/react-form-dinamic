import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form {" "}
                            <span className="pt-2 pb-4">that you will do everything that you want</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5">
                            Hola, mi nombre es Leonardo Arape, soy estudiante del Politecnico Costa Atlantica, 10mo semestre en Ingenieria de Sistemas, realizando el diplomado de aplicaciones en REACT
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                            <Button
                                    className="p-3"
                                    // onClick={() => console.log("click button1")}
                                ><a href="#Services">Get in touch</a></Button>
                                <Button className="p-3"><a href="#Services">Get in touch</a></Button>
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}
