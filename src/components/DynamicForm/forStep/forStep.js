import { useState } from "react";
import "./forStep.css";
import {
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row
}  from "react-bootstrap";
import Resume from "../Resume";
import Select from "react-select";

const options=[
    {id:1, value:"Vallenato", label:"Vallenato ⚽"},
    {id:2, value:"Rock", label:"Rock 💻"},
    {id:3, value:"pop", label:"pop 🎮"},
    {id:4, value:"rap", label:"rap 🎼"},
    {id:5, value:"piano", label:"piano 📷"},
];

export default function ForStep({setStep}) {
    const [selectOption, setSelectOption]=useState(null);
    const hobbiesSer= JSON.stringify(selectOption);
    localStorage.setItem("music", hobbiesSer);

    const [modal, setModal]= useState(false);
    const onChangeComment = (e) =>{
        const comment= e.target.value;
        localStorage.setItem("music", comment);
    };
    return(
        <div>
            <h2>For Step</h2>
            {/* <h4>Quieres ver los resultados?</h4> */}
            <Container className="p-5 text-center">
            <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5 className="mb-4">Select your music para programar</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                   
                </Row>


               
                <div className="send-form mt-4">
                    <p className="result p-3" onClick={()=> setModal(true)}>
                        View result 🙌
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
                )}
            </Container>
        </div>
    );
}
