import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigate } from 'react-router-dom'

const TileCard = (props: any) => {
  const { title, icon, link } = props
  const navigate = useNavigate()

  return (
    <div className="clr-item" onClick={() => navigate(link)}>
      <div className="conf-bx">
        <div className="global-boxlist__item">
          <div className="boxlist-item__heading--small">{title}</div>
          <div className="boxlist-item__iconbox">
            {' '}
            <i className="fa fa-3x fa-fw fa-money"></i>{' '}
          </div>
          <div className="boxlist-item__counter">
            <span style={{ fontSize: 12, color: 'gray' }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TileCard
