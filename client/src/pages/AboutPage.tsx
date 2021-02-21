import React from "react";
import { Row, Col } from "reactstrap";
import PageContainer from "../components/PageContainer";

function AboutPage() {
    return (
        <PageContainer>
            <h2 style={{paddingTop: "10vh"}} className="text-center">About The Creator</h2>
            <Row 
                style={{marginRight: "auto", justifyContent: "center"}}
            >
                <img 
                    src="/images/ikeMotorcyle.webp" 
                    alt="creator next to motorcycle"
                    style={{borderRadius: 360}}
                />
            </Row>
            <h3 style={{paddingTop: "10vh"}} className="text-center">Ike Barranco</h3>
            <Row>
                <Col xs={12} md={{offset: 2, size: 8}}>
                    <p style={{fontSize: "1rem"}}>
                        Hello, I am an entry level software developer certified in full stack web development from 
                        Trilogy hosted by the University Of Utah. My love for software development started in high
                        school. Its unsure if it was C# or coding, but I was hooked! Some technologies I've learned are:
                        MongoDB, MySQL, HTML, CSS, Node.js, JQuery, JSON, React and handlebars. Since Coding bootcamp I've
                        branched out to Redux, Typescript, and Firebase. My hobbies only include taking care of my dogs and
                        playing video games. My dog breeds are a yellow lab and an australian shepard. As for video games,
                        I play a wide variety of video games from MMOs to FPS.
                    </p>
                </Col>
            </Row>
        </PageContainer>
    );
};

export default AboutPage;