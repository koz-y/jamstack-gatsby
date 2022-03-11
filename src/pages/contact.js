import React from "react"
import { Container, Col, Row, Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="お問い合わせ"></Seo>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row>
        <Col>
          <div>
            <h1>お問い合わせ</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Container className="mx-5">
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicText">
                <Form.Control
                  type="text"
                  as="input"
                  placeholder="Name"
                  name="name"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  as={"input"}
                  placeholder="EMail"
                  name="email"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formTextArea">
                <Form.Control
                  as={"textarea"}
                  placeholder="Message"
                  rows={"3"}
                  name="message"
                  required
                ></Form.Control>
              </Form.Group>
              <Button variant="light" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage
