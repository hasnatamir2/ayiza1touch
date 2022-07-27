import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Table,
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const IncomeTaxTable = (props: any) => {
  const {
    companies,
    isLoading,
    navigate,
    page,
    setPage,
    pageSize,
    setPageSize,
    handleDelete,
    handleEdit,
    handleView,
    handleCopy,
    handleSelected,
    selectedMultiId,
    handleMultiDelete,
    handleSearch,
    search,
  } = props
  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>Income Tax</span>
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
                onClick={() => navigate('/fileIncomeTax')}
                className="btn btn-blue"
              >
                Add
              </Button>
              <Button
                disabled={isLoading || selectedMultiId?.length < 1}
                className="red-btn"
                variant="outline-danger"
                onClick={handleMultiDelete}
              >
                Delete
              </Button>
              <div className="d-flex align-items-center w-25">
                <span className="mr-2 label">Show</span>
                <Form.Select value={pageSize} onChange={setPageSize}>
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
                size="lg"
                // onChange={handleSearch}
              />
            </Col>
          </Row>
          <Table size="sm" className="mb-0">
            <thead>
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    as="input"
                    className="custom-switch ay_switch"
                    // checked={selectedMultiId.length > 0}
                  />
                </th>
                <th>Name</th>
                <th>Type</th>
                <th>Industry</th>
                <th>Currency</th>
                <th>Financial Year</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
          </Table>
          <div className="table-pagination-footer">
            <span className="table-record-length">Showing 1 of 1 entries</span>
            <div className="table-footer-input-group">
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-left')} />
              </Button>
              <Form.Control type="text" value={1} />
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-right')} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default IncomeTaxTable
