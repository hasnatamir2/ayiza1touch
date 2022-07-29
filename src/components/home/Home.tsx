import { Container, Card, Row, Col } from 'react-bootstrap'
import TileCard from '../common/TileCard'
import { useNavigate } from 'react-router-dom'

const Home = (props: any) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="py-2 px-4 d-flex justify-content-center">
        <Card className="card-container">
          <Card.Body>
            <Row>
              <Col sm={3}>
                <TileCard
                  title="Company Code"
                  icon="building-columns"
                  link={'/companyCode'}
                />
              </Col>
              <Col sm={3}>
                <TileCard
                  title="File Income Tax"
                  icon="wallet"
                  link={'/incomeTax'}
                  color="rebeccapurple"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Home
