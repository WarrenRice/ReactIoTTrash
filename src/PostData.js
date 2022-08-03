import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import { ChatDots } from "react-bootstrap-icons";

function PostData() {
  function submitText() {
    try {
      let res = fetch(
        "https://webhook.site/879d878d-c697-4cf5-b92d-dc1a295df7c8",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            key1: document.getElementById("textInput").value,
          }),
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  function submitNum() {
    try {
      let res = fetch(
        "https://webhook.site/879d878d-c697-4cf5-b92d-dc1a295df7c8",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            key1: document.getElementById("numInput").value,
          }),
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  function submitTextNum() {
    try {
      let res = fetch(
        "https://webhook.site/879d878d-c697-4cf5-b92d-dc1a295df7c8",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            key1: document.getElementById("textInput").value,
            key2: document.getElementById("numInput").value,
          }),
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  function submitNumText() {
    try {
      let res = fetch(
        "https://webhook.site/879d878d-c697-4cf5-b92d-dc1a295df7c8",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            headers: ("Access-Control-Allow-Origin", "*"),
          },
          body: JSON.stringify({
            key1: document.getElementById("numInput").value,
            key2: document.getElementById("textInput").value,
          }),
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <br />
      <h5>Post data to api</h5>
      <br />
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              id="textInput"
              type="text"
              placeholder="Please input the message"
            ></Form.Control>
            <Button variant="outline-secondary" onClick={submitText}>
              Send Data <ChatDots />
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              id="numInput"
              type="number"
              placeholder="Please input the number"
            />
            <Button variant="outline-secondary" onClick={submitNum}>
              Send Data <ChatDots />
            </Button>
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Send the data by string, number"
              disabled
            />
            <Button variant="outline-secondary" onClick={submitTextNum}>
              Send Data <ChatDots />
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Send the data by number, string"
              disabled
            />
            <Button variant="outline-secondary" onClick={submitNumText}>
              Send Data <ChatDots />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default PostData;
