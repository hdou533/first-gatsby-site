import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (

      <Layout pageTitle="Home Page">
        <p>Hi, this is the homepage.</p>
      </Layout>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage