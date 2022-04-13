import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Japanese Single malt - The Yamazaki"
        src="../images/yamazaki.jpg"
      />
    </Layout>
  )
}

export default IndexPage