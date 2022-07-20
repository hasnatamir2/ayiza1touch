import TileCard from '../common/TileCard'
import { Row, Col, Container } from 'react-bootstrap'

const AdminPanel = () => {
  return (
    <Container className="admin-panel">
      <Row>
        <Col sm={3}>
          <TileCard title="4" text="Number of users" />
        </Col>
        <Col sm={3}>
          <TileCard title="10" text="Number of Products" />
        </Col>
        <Col sm={3}>
          <TileCard title="11" text="Number of categories" />
        </Col>
        <Col sm={3}>
          <TileCard title="2" text="Number of orders" />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminPanel
