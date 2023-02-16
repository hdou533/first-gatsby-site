import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (

      <Layout pageTitle="Home Page">
      <p>Hi, this is the homepage.</p>
      <StaticImage
        alt="clifford"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="wallpaper"
        src="../images/wallpaper.jpg"
      />
      </Layout>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage