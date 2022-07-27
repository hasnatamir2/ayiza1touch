import { useState, useEffect } from 'react'
import IncomeTaxForm from '../../components/incomeTax/IncomeTaxForm'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
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
    name: 'File Income Tax',
    path: '/fileIncomeTax',
  },
]

const FileIncomeTaxContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm()

  const [disableMode, setDisableMode] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )

  const [consolidatedExpenses, setConsolidatedExpenses] = useState(false)

  useEffect(() => {
    if (mode === 'view') {
      setDisableMode(true)
    } else if (mode === 'edit') {
      setDisableMode(false)
    }
    let company = companies.find((company: any) => company.id === Number(id))
    if (company) {
      // setValue('businessName', company.businessName)
      // setValue('businessType', company.businessType)
      // setValue('industry', company.industry)
      // setValue('country', company.country)
      // setValue('currency', company.currency)
      // setValue('timezone', company.timezone)
      // setValue('financialYear', company.financialYear)
      // setValue('calculateVAT', company.calculateVAT)
    }
  }, [companies])

  useEffect(() => {
    const { fileConsolidatedExpenses } = watch()
    setConsolidatedExpenses(fileConsolidatedExpenses)
  }, [watch()])

  const handleFormSubmit = (values: any) => {
    if (mode === 'edit') {
      navigate('/incomeTax')
    } else {
      let id = Math.floor(Math.random() * 10000)

      navigate('/incomeTax')
    }
  }
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <IncomeTaxForm
        handleFormSubmit={handleFormSubmit}
        formHookSubmit={handleSubmit}
        registerInput={register}
        errors={errors}
        isLoading={isLoading}
        navigate={navigate}
        disableMode={disableMode}
        getValues={getValues}
        consolidatedExpenses={consolidatedExpenses}
      />
    </>
  )
}

export default FileIncomeTaxContainer
