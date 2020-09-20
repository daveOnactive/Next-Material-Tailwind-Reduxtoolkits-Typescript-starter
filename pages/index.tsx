import Link from 'next/link'
import Layout from '../components/Layout'
import { Card, CardContent, Container } from '@material-ui/core';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <Container maxWidth="xs">
        <Card>
          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias placeat sapiente adipisci dolor eligendi iure enim laborum? Aliquam, ipsam magni?
          </CardContent>
        </Card>
      </Container>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
