import { Card } from 'react-bootstrap'

const TileCard = (props: any) => {
  return (
    <Card className="tile-card">
      <Card.Body>
        <Card.Title className="fs-2">{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TileCard
