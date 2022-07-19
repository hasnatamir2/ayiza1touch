import React from 'react'
import CompanyTable from '../../components/companyCode/CompanyTable'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

const CompanyCodeContainer: React.FC = (props) => {
  const navigate = useNavigate();

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )

  return <CompanyTable companies={companies} isLoading={isLoading} Navigate={navigate} />
}

export default CompanyCodeContainer
