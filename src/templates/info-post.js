import * as React from "react"
import { Link, graphql } from "gatsby"
import { Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title=""></Seo>
      <Row>
        <Col className="mt-5"></Col>
      </Row>
      <Row>
        <Col>
          <h1>{post.frontmatter.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5"></Col>
      </Row>
      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Col>
        <Row>
          <Col className="mt-5"></Col>
        </Row>
      </Row>
    </Layout>
  )
}

export default InformationPost

export const query = graphql`
  query PostSlugQuery($slug: String = "") {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
      }
    }
  }
`
