import { useState, useEffect } from 'react'
import IncomeTaxForm from '../../components/incomeTax/IncomeTaxForm'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

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
  const [modalShow, setModalShow] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  const [consolidatedExpenses, setConsolidatedExpenses] = useState(false)

  useEffect(() => {
    const { fileConsolidatedExpenses } = watch()
    setConsolidatedExpenses(fileConsolidatedExpenses)
  }, [watch()])

  const handleFormSubmit = (values: any) => {
    if (mode === 'edit') {
      navigate('/incomeTax')
    } else {
      setModalShow(true)
    }
  }
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I agree, that this VAT Submission has been auditied and processed
          before sending to HMRC by Ayiza Limited. It cannot be changed. I have
          ensured that all boxes of VAT return are correct and documented this.
          (HMRC_0000019)
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setModalShow(false)}>
            Yes - I Agree!
          </Button>
        </Modal.Footer>
      </Modal>
      <IncomeTaxForm
        handleFormSubmit={handleFormSubmit}
        formHookSubmit={handleSubmit}
        registerInput={register}
        errors={errors}
        isLoading={false}
        navigate={navigate}
        disableMode={disableMode}
        getValues={getValues}
        consolidatedExpenses={consolidatedExpenses}
      />
    </>
  )
}

export default FileIncomeTaxContainer
