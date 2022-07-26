import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const TileCard = (props: any) => {
  const { title, icon } = props
  console.log(icon)
  return (
    <Card className="tile-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon icon={solid('building-columns')} />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TileCard
