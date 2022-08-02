import IncomeTaxTable from './IncomeTaxTable'

const IncomeTax = (props: any) => {
  const {
    navigate,
    getBusinessNames,
    niNumber,
    setNiNumber,
    businessData,
    mode,
  } = props
  return (
    <>
      <IncomeTaxTable
        navigate={navigate}
        getBusinessNames={getBusinessNames}
        niNumber={niNumber}
        setNiNumber={setNiNumber}
        businessData={businessData}
        mode={mode}
      />
    </>
  )
}

export default IncomeTax
