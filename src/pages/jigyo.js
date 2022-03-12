import React from "react"
import { Col, Row, Card } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const JigyoPage = () => {
  return (
    <Layout>
      <Seo title="事業内容"></Seo>
      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row style={{ maxWidth: `960px` }}>
        <Col>
          <h1>事業内容ページ</h1>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card>
            <Card.Img src={jigyo1Img}></Card.Img>
            <Card.Body>
              <Card.Title>軌道上デブリ除去</Card.Title>
              <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img src={jigyo2Img}></Card.Img>
            <Card.Body>
              <Card.Title>テレポーテーションゲート開設</Card.Title>
              <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img src={jigyo3Img}></Card.Img>
            <Card.Body>
              <Card.Title>業子力学による量子コントロール</Card.Title>
              <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default JigyoPage
