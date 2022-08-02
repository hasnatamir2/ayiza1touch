import { useState } from 'react'
import IncomeTax from '../../components/incomeTax/IncomeTax'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate, useSearchParams } from 'react-router-dom'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Income Tax',
    path: '/incomeTax',
  },
  {
    name: 'Ni Number',
    path: '/niNumber',
  },
]

const IncomeTaxContainer = (props: any) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const mode = searchParams.get('mode')

  const [niNumber, setNiNumber] = useState('')

  const getBusinessNames = () => {
    navigate('/niNumber?mode=data')
  }

  return (
    <>
      <Breadcrumbs
        crumbs={
          mode === 'data'
            ? [
                ...crumbs,
                { name: 'Get Business Names', path: '/niNumber?mode=data' },
              ]
            : crumbs
        }
      />
      <IncomeTax
        navigate={navigate}
        getBusinessNames={getBusinessNames}
        niNumber={niNumber}
        setNiNumber={setNiNumber}
        businessData={[]}
        mode={mode}
      />
    </>
  )
}

export default IncomeTaxContainer
