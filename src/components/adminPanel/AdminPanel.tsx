import TileCard from '../common/TileCard'
import { Row, Col, Container, Card } from 'react-bootstrap'

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Card className='card-container'>
        <Card.Body className=''>
          <Row>
            <Col sm={3}>
              <TileCard title="Bank & Cash" icon="building-columns" />
            </Col>
            <Col sm={3}>
              <TileCard title="10" icon="building-columns" />
            </Col>
            <Col sm={3}>
              <TileCard title="11" icon="building-columns" />
            </Col>
            <Col sm={3}>
              <TileCard title="2" icon="building-columns" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminPanel
