
import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { Input, FormLabel, TextField } from '@material-ui/core';
import './contract.css';





class Contract extends React.Component {

    render() {
        return (
            <div style={{paddingTop: '150px', height: '100vh', backgroundColor: '#d5e6ed', color: 'black'}}>

                <Grid  >
                    <div style={{margin: '10px'}}>
                            <Row style={{paddingBottom: '50px;'}}>
                                <Col md={6}>
                                <Row>
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Your Name:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'red'}}> Nguyễn Duy Hậu</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
                                <Col md={4} className="d-flex justify-content-start">
                                    <FormLabel> Gender:</FormLabel>
                                </Col>
                                <Col md={8} className="d-flex justify-content-start">
                                <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                </Col>
                                </Row>

                                <Row className="mt-2">
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

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Gender:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> Male</FormLabel>
                                    </Col>
                                    </Row>

                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Adress:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}> 100/53 Dương Bá Trạc</FormLabel>
                                    </Col>
                                    </Row>
                                    <Row className="mt-2">
                                    <Col md={4} className="d-flex justify-content-start">
                                        <FormLabel> Price:</FormLabel>
                                    </Col>
                                    <Col md={8} className="d-flex justify-content-start">
                                    <FormLabel style={{color: 'blue'}}><strong style={{color: 'red'}}>$2000/h</strong></FormLabel>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <hr className="style1" />
                            <br />
                            <Row className="d-flex justify-content-center mt-2">
                                <Col md={6} >
                                <FormLabel>Rent Hours:</FormLabel>
                                </Col>
                                <Col md={6} >
                                    <Input type="text" placeholder="Enter rent hours" />
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-5">
                            <Col md={6} >
                                    <TextField
                                        id="date"
                                        label="Start Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                            </Col>
                            <Col md={6}>

                                    <TextField
                                        id="date"
                                        label="End Date"
                                        type="date"
                                        defaultValue="2019-12-26"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                            </Col>

                            </Row>
                            <Row className="d-flex justify-content-center mt-5">
                            <Col md={6} >
                                <FormLabel>Created Date:</FormLabel>
                                </Col>
                                <Col md={6} style={{color: 'red'}}>
                                {`${(new Date()).getDate()  }-${ parseInt((new Date()).getMonth()+1) }-${(new Date()).getFullYear()}`}
                                </Col>

                            </Row>
                            <Row className="d-flex justify-content-end mt-5">
                                <Link to="/" className="btn btn-outline-success py-2 px-4"  >Payment</Link>
                            </Row>

                            </div>
                    </Grid>
            </div>
        );
    }
}

export default Contract;