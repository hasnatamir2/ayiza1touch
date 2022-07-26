import { Container, Card } from 'react-bootstrap'
import Breadcrumbs from '../common/Breadcrumb'

const cr = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Tenants',
    path: '/tenants',
  },
]

const Home = (props: any) => {
  return (
    <>
      <Container className="pt-2">
        <Card>
          <Card.Header>Home</Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Home
