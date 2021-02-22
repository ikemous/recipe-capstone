import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import PageContainer from "../components/PageContainer";
import "./guidePage.css";

function GuidePage() {
    return (
        <PageContainer>
            <Row style={{paddingTop: "2vh"}} className="text-center">
                <Col className="guide-link" xs={12} md={{offset: 2, size: 4}}>
                    <a href="#search-recipe">Search Recipe</a>
                </Col>
                <Col className="guide-link" xs={12} md={4}>
                    <a href="#create-account">Create Account</a>
                </Col>
            </Row>
            <Row style={{paddingTop: "2vh"}} className="text-center">
                <Col className="guide-link" xs={12} md={{offset: 2, size: 4}}>
                    <a href="#login-account">Login Account</a>
                </Col>
                <Col className="guide-link" xs={12} md={4}>
                    <a href="#forgot-password">Forgot Password</a>
                </Col>
            </Row>
            
            <Row style={{paddingTop: "2vh"}} className="text-center">
                <Col className="guide-link" xs={12} md={{offset: 2, size: 4}}>
                    <a href="#save-recipe">Save Recipe</a>
                </Col>
                <Col className="guide-link" xs={12} md={4}>
                    <a href="#create-recipe">Create Recipe</a>
                </Col>
            </Row>
            <Row style={{paddingTop: "2vh"}} className="text-center">
                <Col className="guide-link" xs={12} md={{offset: 2, size: 4}}>
                    <a href="#update-recipe">Update Recipe</a>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}} id="search-recipe">
                <Col style={{paddingTop: "1vh"}} xs={12}>
                    <h2 className="text-center">Search Recipe</h2>
                </Col>
                <Col xs={12} md={{ size: 6}}>
                    <h3 className="text-center">Option 1</h3>
                    <ListGroup>
                        <ListGroupItem>1. Click On The Search Link In The Navbar</ListGroupItem>
                        <ListGroupItem>2. Find Search Bar</ListGroupItem>
                        <ListGroupItem>3. Type Desired Ingredient</ListGroupItem>
                        <ListGroupItem>4. Click Search Button</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col xs={12} md={{ size: 6}}>
                    <h3 className="text-center">Option 2</h3>
                    <ListGroup>
                        <ListGroupItem>1. Find Search Bar in the Home Page</ListGroupItem>
                        <ListGroupItem>2. Type Desired Ingredient</ListGroupItem>
                        <ListGroupItem>3. Click Search Button</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}}  id="create-account">
                <Col xs={12}>
                    <h2 className="text-center">Create Recipe</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. Click On <a href="/signup" rel="noopener noreferrer" target="_blank">Signup</a> Link On The Navbar</ListGroupItem>
                        <ListGroupItem>2. Fill Out Email On Form</ListGroupItem>
                        <ListGroupItem>3. Fill Out Password On Form</ListGroupItem>
                        <ListGroupItem>4. Confirm Password On Form</ListGroupItem>
                        <ListGroupItem>5. Click The Signup Button</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}}  id="login-account">
                <Col xs={12}>
                    <h2 className="text-center">Login Account</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. Click On <a href="/login" rel="noopener noreferrer" target="_blank">Login</a> Link On The Navbar</ListGroupItem>
                        <ListGroupItem>2. Fill Out Email</ListGroupItem>
                        <ListGroupItem>3. Fill Out Password</ListGroupItem>
                        <ListGroupItem>4. Click On Login Button</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}}  id="forgot-password">
                <Col xs={12}>
                    <h2 className="text-center">Forgot Password</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. Click On <a href="/login" rel="noopener noreferrer" target="_blank">Login</a> Link On The Navbar</ListGroupItem>
                        <ListGroupItem>2. Click On Forgot Password Link</ListGroupItem>
                        <ListGroupItem>3. Fill Out Email Information</ListGroupItem>
                        <ListGroupItem>4. Click On Send Email Button</ListGroupItem>
                        <ListGroupItem>5. Find Email In Your Inbox</ListGroupItem>
                        <ListGroupItem>6. Click On Password Reset Link From Email</ListGroupItem>
                        <ListGroupItem>7. Type In New Password</ListGroupItem>
                        <ListGroupItem>8. Click Save</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}}  id="save-recipe">
                <Col xs={12}>
                    <h2 className="text-center">Save Recipe</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. <a href="/login">Login</a> To Your Account</ListGroupItem>
                        <ListGroupItem>2. Search Recipe (see <a href="#search-recipe" rel="noopener noreferrer" target="_blank">Search Recipe</a>)</ListGroupItem>
                        <ListGroupItem>3. Click on A Recipe</ListGroupItem>
                        <ListGroupItem>4. Find The Heart on the bottom right of the recipe pop up</ListGroupItem>
                        <ListGroupItem>5. Click The Heart</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh"}}  id="create-recipe">
                <Col xs={12}>
                    <h2 className="text-center">Create Recipe</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. <a href="/login">Login</a> To Your Account</ListGroupItem>
                        <ListGroupItem>2. Click <a href="/my-recipes" rel="noopener noreferrer" target="_blank">My Recipe</a> Link On Navbar</ListGroupItem>
                        <ListGroupItem>3. Click Add Recipe Button On The Bottom Of The Screen</ListGroupItem>
                        <ListGroupItem>4. Fill In Recipe Name</ListGroupItem>
                        <ListGroupItem>5. Fill In Recipe Serving Size (Numbers Only)</ListGroupItem>
                        <ListGroupItem>6. (Optional) Fill in website source</ListGroupItem>
                        <ListGroupItem>7. Type Ingredient</ListGroupItem>
                        <ListGroupItem>8. Click Plus Sign</ListGroupItem>
                        <ListGroupItem>9. Repeat Steps 7 and 8 until complete</ListGroupItem>
                        <ListGroupItem>10. Click Create Button</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row style={{paddingTop: "3vh", paddingBottom: "5vh"}}  id="update-recipe">
                <Col xs={12}>
                    <h2 className="text-center">Update Recipe</h2>
                </Col>
                <Col xs={12} md={{ offset: 2, size: 8}}>
                    <ListGroup>
                        <ListGroupItem>1. <a href="/login">Login</a> To Your Account</ListGroupItem>
                        <ListGroupItem>2. Click <a href="/my-recipes" rel="noopener noreferrer" target="_blank">My Recipe</a> Link On Navbar</ListGroupItem>
                        <ListGroupItem>3. Click Recipe You Want To Update</ListGroupItem>
                        <ListGroupItem>4. Find The Item(s) You want to update</ListGroupItem>
                        <ListGroupItem>5. Update The Information In The Form</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </PageContainer>
    )
};

export default GuidePage;