import React from 'react'
import CompanyCode from '../../components/companyCode/CompanyCode'
import { setValues } from '../../redux/Slices/CompanyCodeSlice'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

type FormData = {
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: string
  financialYear: number
  calculateVAT: boolean
}

const CompanyCodeContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()
  const navigate = useNavigate();

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )
  const dispatch = useDispatch()

  const handleFormSubmit = (values: any) => {
    dispatch(setValues(values))
    navigate('/companyCode')
  }


  return (
    <CompanyCode
      companies={companies}
      handleFormSubmit={handleFormSubmit}
      formHookSubmit={handleSubmit}
      registerInput={register}
      errors={errors}
      isLoading={isLoading}
    />
  )
}

export default CompanyCodeContainer
