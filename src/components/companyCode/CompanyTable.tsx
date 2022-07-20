import { Table, Container, Card, Button } from 'react-bootstrap'

const CompanyTable = (props: any) => {
  const { companies, isLoading, Navigate } = props
  return (
    <Container className="pt-2">
      <Card className="border-0">
        <Card.Header>
          <div className="card-header-content">
            <span>Company Codes</span>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={() => Navigate('/addCompanyCode')}
              variant="outline-primary"
            >
              Add
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Table striped size="sm" className="mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Business Name</th>
                <th>Business Type</th>
                <th>Industry</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Time Zone</th>
                <th>Financial Year</th>
                <th>Calculate VAT</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{company.businessName}</td>
                    <td>{company.businessType}</td>
                    <td>{company.industry}</td>
                    <td>{company.country}</td>
                    <td>{company.currency}</td>
                    <td>{company.timezone}</td>
                    <td>{company.financialYear}</td>
                    <td>
                      {company.calculateVAT ? (
                        <p className="text-success m-0">True</p>
                      ) : (
                        <p className="text-danger m-0">False</p>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CompanyTable
