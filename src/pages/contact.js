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

      <Row style={{ maxWidth: `960px` }}>
        <Col>
          <div>
            <h1>お問い合わせ</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Container style={{ width: `80%` }}>
        <Row>
          <Col>
            <Form method="post" name="contact" data-netlify="true">
              <input type="hidden" name="form-name" value="contact"></input>
              <Form.Group controlId="formBasicText" className="mb-3">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="EMail"
                  name="email"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formTextArea" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  rows="3"
                  name="message"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="FormControlFile" className="mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  lang="ja"
                  label="send file"
                ></Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
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
