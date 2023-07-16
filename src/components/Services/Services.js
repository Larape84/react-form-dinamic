import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
// import imgCourse1 from "../../assets/img/hbo.jpeg";
// import imgCourse2 from "../../assets/img/netflix.jpeg";
// import imgCourse3 from "../../assets/img/prime.jpeg";
import  imgCourse1 from "../../assets/img/img1.jpg"
import  imgCourse2 from "../../assets/img/img2.jpg"
import  imgCourse3 from "../../assets/img/img3.jpg"
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Angular framework",
            subtitle: "Lear all about this great framework",
            image: imgCourse1,
            footer: "Go to the website ➡️",
            link: "https://angular.io/",
        },
        {
            title: "Svelte framework",
            subtitle: "Lear all about this great framework",
            image: imgCourse2,
            footer: "Go to the website ➡️",
            link: "https://svelte.dev/",
        },
        {
            title: "Qwik framework",
            subtitle: "Lear all about this great framework",
            image: imgCourse3,
            footer: "Go to the website ➡️",
            link: "https://qwik.builder.io/",
        },
    ];

    return (
        <div className="services p-4 mt-5" id="Services">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
