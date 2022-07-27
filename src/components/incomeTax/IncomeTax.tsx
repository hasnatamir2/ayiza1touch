import IncomeTaxTable from './IncomeTaxTable'

const IncomeTax = (props: any) => {
  const { navigate } = props
  return (
    <>
      <IncomeTaxTable navigate={navigate} />
    </>
  )
}

export default IncomeTax
