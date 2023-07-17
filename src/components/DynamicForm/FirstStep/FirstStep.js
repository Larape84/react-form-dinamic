import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";

export const fruits = [
    {
        id:1,
        icon:"⭐⭐⭐⭐⭐",
        name:"Lavarel",
        description:"Laravel is an open source MVC framework written in PHP for web application development, created in 2011 by Taylor Otwell as a derivation of Symfony.",
    },
    {
        id:2,
        icon:"⭐⭐⭐⭐",
        name:"Django ",
        description:"Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes",
    },
    {
        id:3,
        icon:"⭐⭐⭐",
        name:"Spring",
        description:"The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications – on any",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
    };


    return(
        <div>
            <h2>Choose your favorite Back-end</h2>
            <h4>Select your fruit and then click the button of "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
    
}
