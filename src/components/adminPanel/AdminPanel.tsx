import TileCard from '../common/TileCard'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()
  return (
    <div className="admin-panel">
      <Card className="card-container">
        <Card.Body className="">
          <Row>
            <Col sm={3}>
              <TileCard
                title="Bank & Cash"
                icon="building-columns"
                link={'/adminPanel'}
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="Customer Invoice"
                icon="building-columns"
                link={'/adminPanel'}
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="supplier bills"
                icon="building-columns"
                link={'/adminPanel'}
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="universal analytics"
                icon="building-columns"
                link={'/adminPanel'}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminPanel
