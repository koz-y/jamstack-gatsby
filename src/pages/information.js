import React from "react"
import { Link, graphql } from "gatsby"
import { Col, Row, Card } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="インフォメーション"></Seo>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row style={{ maxWidth: `960px` }}>
        <Col>
          <h1>インフォメーション</h1>
        </Col>
      </Row>

      <Row>
        <Col className="mt-5"></Col>
      </Row>

      <Row className="g-2">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col xs={12} md={6} key={node.fields.slug}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Link to={`${node.fields.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </Card.Title>
                <Card.Text>{node.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export default InformationPage

export const query = graphql`
  query InfoQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 50, truncate: true)
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
          }
        }
      }
    }
  }
`
