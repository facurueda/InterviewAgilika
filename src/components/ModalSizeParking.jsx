import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalSizeParking = (props) => {
      const { modalShow, modalClose, setParkingSize } = props;

      const [size, setSize] = useState({
            1:5,
            2:5,
            3:5
      })

      const onChange = (e) => {
            setSize({
                  ...size,
                  [e.target.name]: e.target.value
            })
      }

      return (
            <Modal
                  show={modalShow}
                  onHide={() => modalClose()}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
            >
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                              Choose the size of the parking
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <p>The default size is 5 spaces for each</p>
                        <Form.Group style={{ display: "flex" }}>
                              <Form.Group>
                                    <Form.Label>Small</Form.Label>
                                    <Form.Control
                                          type="number"
                                          placeholder="Small"
                                          name="1"
                                          value={size[1]}
                                          onChange={e => onChange(e)}
                                    />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label>Medium</Form.Label>
                                    <Form.Control
                                          type="number"
                                          placeholder="Medium"
                                          name="2"
                                          value={size[2]}
                                          onChange={e => onChange(e)}
                                    />
                              </Form.Group>
                              <Form.Group>
                                    <Form.Label>Large</Form.Label>
                                    <Form.Control
                                          type="number"
                                          placeholder="Large"
                                          name="3"
                                          value={size[3]}
                                          onChange={e => onChange(e)}
                                    />
                              </Form.Group>
                        </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button variant='success' onClick={e => {setParkingSize(size); modalClose()}}>Save</Button>
                        <Button variant='danger' onClick={modalClose}>Close</Button>
                  </Modal.Footer>
            </Modal>
      );
};

export default ModalSizeParking;
