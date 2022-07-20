import { Table, Container, Button } from 'react-bootstrap'

const TenantsTable = (props: any) => {
  const { tenants } = props
  return (
    <Container className="pt-2">
      <Table striped size="sm" className="mt-4 mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Time Zone</th>
            <th>Amount</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{tenant.name}</td>
                <td>{tenant.email}</td>
                <td>{tenant.phoneNumber}</td>
                <td>{tenant.type}</td>
                <td>{tenant.country}</td>
                <td>{tenant.currency}</td>
                <td>{tenant.timeZone}</td>
                <td>{tenant.amount}</td>
                <td>
                  <Button>Details</Button>
                  <Button>Setup</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default TenantsTable
