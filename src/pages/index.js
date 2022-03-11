import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Row, Col, Card } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

// import image from  "../components/iamge"
import homgeImage from "../images/home.jpg"
import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Row style={{ maxWidth: `960px` }}>
      <img
        src={homgeImage}
        style={{ width: `100%`, marginBottom: `2rem` }}
      ></img>
    </Row>

    <Row className="mt-1">
      <Col xs={12} md={6} style={{ maxWidth: `480px` }}>
        <Row>
          <Col>
            <div className="p-3 mb-2 bg-primary text-white">
              インフォメーション
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>インフォメーション 1</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>インフォメーション2</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>インフォメーション3</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>インフォメーション4</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>インフォメーション5</Col>
        </Row>
      </Col>
      <Col xs={12} md={6} style={{ maxWidth: `480px` }}>
        <Row>
          <Col>
            <div className="p-3 mb-2 bg-primary text-white">IR</div>
          </Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>決算報告書</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>社長挨拶</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>広告スペース</Col>
        </Row>
        <Row>
          <Col style={{ padding: `0.5rem` }}>広告スペース</Col>
        </Row>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col>
        <div className="p-3 mb-2 bg-primary text-white">事業内容</div>
      </Col>
    </Row>
    <Row>
      <Col style={{ maxWidth: `960px` }}>
        <Row>
          <Col xs={6} md={4}>
            <Card bg="light" border="primary">
              <Card.Img src={jigyo1Img}></Card.Img>
              <Card.Body>
                <Card.Title>軌道上デブリ除去</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card bg="light" border="primary">
              <Card.Img src={jigyo2Img}></Card.Img>
              <Card.Body>
                <Card.Title>テレポーテーションゲート開設</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card bg="light" border="primary">
              <Card.Img src={jigyo3Img}></Card.Img>
              <Card.Body>
                <Card.Title>量子コントロール</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col> 余白 </Col>
    </Row>
  </Layout>
)

export default IndexPage
