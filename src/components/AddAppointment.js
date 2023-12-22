import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const AddAppointment=({onSendAppointment, lastId})=>{

    const clearData = {
        firstName: '',
        lastName: '',
        aptDate: '',
        aptTime: '',
        aptNotes: ''
    }

    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setformData] = useState(clearData);

    function formDataPublish(){
        const appointmentInfo = {
            id: lastId +1,
            firstName: formData.firstName,
            lastName: formData.lastName,
            aptDate: formData.aptDate+''+formData.aptTime,
            aptNotes: formData.aptNotes
        }
        onSendAppointment(appointmentInfo);
        setformData(clearData);
        setToggleForm(!toggleForm);
    }

    return(
        <>
            <Col md="8">
                <Card className="mb-3">
                    <Card.Header>Add Appointment
                        <Button size="sm" 
                        className="small float-end" 
                        onClick={()=>{setToggleForm(!toggleForm)}}>+</Button>
                    </Card.Header>
                    {toggleForm &&
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" id="firstName" 
                                    onChange={(event)=>setformData({...formData, firstName: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" id="lastName"
                                    onChange={(event)=>setformData({...formData, lastName: event.target.value})} />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control type="date" id="aptDate"
                                    onChange={(event)=>setformData({...formData, aptDate: event.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appointment Time</Form.Label>
                                    <Form.Control type="time" id="aptTime"
                                    onChange={(event)=>setformData({...formData, aptTime: event.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Feedback</Form.Label>
                                    <Form.Control type="textarea" placeholder="Feedback" id="aptNotes"
                                    onChange={(event)=>setformData({...formData, aptNotes: event.target.value})}/>
                            </Form.Group>
                            <Button variant="primary" onClick={formDataPublish}>Submit</Button>
                        </Form>
                    </Card.Body>
                    }
                </Card>
            </Col>
        </>
    )
}

export default AddAppointment;