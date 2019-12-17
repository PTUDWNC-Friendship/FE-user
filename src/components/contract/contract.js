import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText,FormLabel } from '@material-ui/core';

class Contract extends React.Component {

    render() {
        return (
            <div style={{paddingTop: '114px', height: '100vh', backgroundImage: "url('images/tutor-1.jpg')", color: 'black'}}>
                <Grid  style={{paddingTop: '30px'}}>
                            <Row>
                                <Col md={6}>
                                <Row>
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Your Name:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'red'}}> Nguyễn Duy Hậu</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-1">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Gender:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-1">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Adress:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}> 100/53 Dương Bá Trạc</FormLabel>
                                </Col>
                                </Row>
                                </Col>

                                <Col md={6}>
                                    <Row >
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Tutor's Name:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'red'}}> Nguyễn Duy Hậu Super</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-1">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Gender:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-1">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Adress:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> 100/53 Dương Bá Trạc</FormLabel>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-3">
                                <Link to="/" className="btn btn-outline-success py-2 px-4"  >Payment</Link>
                            </Row>

                    </Grid>
            </div>
        );
    }
}

export default Contract;