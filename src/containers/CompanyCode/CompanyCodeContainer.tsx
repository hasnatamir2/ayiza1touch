import React, { useState } from 'react'
import CompanyTable from '../../components/companyCode/CompanyTable'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompanyCodeContainer: React.FC = (props) => {
  const navigate = useNavigate()

  const [page, setPage] = useState(10)

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )

  const handlePageChange = (event:any) => {
    const { value } = event.target
    setPage(value)
  }

  return (
    <>
    
      <CompanyTable
        companies={companies}
        isLoading={isLoading}
        Navigate={navigate}
        setPage={handlePageChange}
        page={page}          
      />
    </>
  )
}

export default CompanyCodeContainer
