import React from 'react'
import IncomeTax from '../../components/incomeTax/IncomeTax'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate } from 'react-router-dom'

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

const IncomeTaxContainer = () => {
  const navigate = useNavigate()

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <IncomeTax navigate={navigate} />
    </>
  )
}

export default IncomeTaxContainer
