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
      <img src={homgeImage}></img>
    </Row>

    <Row>
      <Col xs={12} md={6} style={{ maxWidth: `480px` }}>
        <Row>
          <Col>インフォメーション</Col>
        </Row>
        <Row>
          <Col>インフォメーション 1</Col>
        </Row>
        <Row>
          <Col>インフォメーション2</Col>
        </Row>
        <Row>
          <Col>インフォメーション3</Col>
        </Row>
        <Row>
          <Col>インフォメーション4</Col>
        </Row>
        <Row>
          <Col>インフォメーション5</Col>
        </Row>
      </Col>
      <Col xs={12} md={6} style={{ maxWidth: `480px` }}>
        <Row>
          <Col>IR</Col>
        </Row>
        <Row>
          <Col>IR情報</Col>
        </Row>
        <Row>
          <Col>社長ブログ</Col>
        </Row>
        <Row>
          <Col>広告スペース</Col>
        </Row>
        <Row>
          <Col>広告スペース</Col>
        </Row>
        <Row>
          <Col>インフォメーション5</Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col>事業内容</Col>
    </Row>
    <Row>
      <Col>
        <Row>
          <Col md="4">
            <Card>
              <Card.Img src={jigyo1Img}></Card.Img>
              <Card.Body>
                <Card.Title>事業内容1</Card.Title>
                <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img src={jigyo2Img}></Card.Img>
              <Card.Body>
                <Card.Title>事業内容2</Card.Title>
                <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
              </Card.Body>{" "}
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img src={jigyo3Img}></Card.Img>
              <Card.Body>
                <Card.Title>事業内容3</Card.Title>
                <Card.Text>吾輩は猫である。名前はまだ無い。</Card.Text>
              </Card.Body>{" "}
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
