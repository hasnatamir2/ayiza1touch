import { useState } from 'react'
import Timeline from '../../components/common/Timeline'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Income Tax',
    path: '/incomeTax',
  },
]

const IncomeTaxTimeline = () => {
  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState(null)

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />
      <Timeline
        steps={[
          { label: 'Maintain NI Number', onClick: () => navigate('/niNumber') },
          {
            label: 'Get Business Names',
            onClick: () => navigate('/niNumber?mode=data'),
          },
          {
            label: 'Prepare Tax Values',
            onClick: () => navigate('/fileIncomeTax'),
          },
          {
            label: 'Submit Tax Values',
            onClick: () => navigate('/fileIncomeTax?mode=view'),
          },
        ]}
        // activeStep={activeStep}
      />
    </div>
  )
}

export default IncomeTaxTimeline
