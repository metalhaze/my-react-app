import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello Everyone!</h1>
    <p>Learn to design and code Reactjs applications</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
