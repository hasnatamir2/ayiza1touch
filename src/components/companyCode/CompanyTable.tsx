import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Table,
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
} from 'react-bootstrap'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const CompanyTable = (props: any) => {
  const { companies, isLoading, Navigate, page, setPage } = props
  return (
    <Container className="pt-2">
      <Card className="border-0">
        <Card.Header>
          <div className="card-header-content">
            <span>Company Codes</span>
            {/* <Form.Select className="quck-action w-25">
              <option>Quick Actions</option>
            </Form.Select> */}
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="table-action-panel">
            <Col sm={6} className="d-flex">
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => Navigate('/addCompanyCode')}
                className="btn-blue"
              >
                Add
              </Button>
              <Button disabled={isLoading} className="red-btn">
                Delete
              </Button>
              <div className="d-flex align-items-center w-25">
                <span className="mr-2 label">Show</span>
                <Form.Select value={page} onChange={setPage}>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={2}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="table-search"
                size='lg'
              />
            </Col>
          </Row>
          <Table size="sm" className="mb-0">
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
          <div className="table-pagination-footer">
            <span className="table-record-length">
              Showing {companies.length} of {companies.length} entries
            </span>
            <div className="table-footer-input-group">
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-left')} />
              </Button>
              <Form.Control type="text" />
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-right')} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CompanyTable
