import React from "react"
import { Col, Row, Table } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="会社概要"></Seo>
      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row>
        <Col>
          <h1 className="">会社概要</h1>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>社名</td>
                <td>サンプル株式会社</td>
              </tr>
              <tr>
                <td>本社</td>
                <td>東京都千代田区1−1</td>
              </tr>
              <tr>
                <td>設立</td>
                <td>xxx年xx月xx日</td>
              </tr>
              <tr>
                <td>資本金</td>
                <td>xxx,xxx,xxx円</td>
              </tr>
              <tr>
                <td>代表者</td>
                <td>サンプル太郎</td>
              </tr>
              <tr>
                <td>従業員</td>
                <td>xxx人</td>
              </tr>
              <tr>
                <td>売上高</td>
                <td>xxx,xxx,xxx円</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Layout>
  )
}

export default AboutPage
