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
    businessData,
    niNumber,
    setNiNumber,
    isLoading,
    navigate,
    mode,
    getBusinessNames,
  } = props
  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>
              {mode === 'data' ? 'Get Business Names' : 'Business Names'}
            </span>
            <div>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => navigate('/incomeTax')}
                className="btn back-but"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => navigate('/niNumber?mode=data')}
                className="btn save-but"
              >
                Save
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="table-action-panel justify-content-start align-items-center">
            <Col sm={2} className="pr-0">
              <div className=" label">NI Number</div>
            </Col>
            <Col sm={4}>
              <Form.Select value={niNumber} onChange={setNiNumber}>
                <option value="NN101232Z">NN101232Z</option>
                <option value="NN101220A">NN101220A</option>
                <option value="NN101220A">NN101220A</option>
              </Form.Select>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip>
                    <span className="muted">
                      NI Number is used to get the business names for income tax
                      declaration for self employed businesses.
                    </span>
                  </Tooltip>
                }
              >
                <span
                  className="help-tp mt-2"
                  data-toggle="tooltip"
                  data-placement="bottom"
                >
                  i
                </span>
              </OverlayTrigger>
            </Col>
            <Col>
              <Button
                type="submit"
                disabled={isLoading}
                className="btn btn-blue ml-2"
                onClick={getBusinessNames}
              >
                Get Business Names
              </Button>
            </Col>
          </Row>
          {mode === 'data' && (
            <>
              <Table size="sm" className="mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Trading Name</th>
                    <th>Type Of Business</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {businessData.map((item: any, index: number) => (
                    <>
                      <tr key={index}>{item.businessId}</tr>
                      <tr key={index}>{item.tradingName}</tr>
                      <tr key={index}>{item.typeOfBusiness}</tr>
                      <tr key={index}></tr>
                    </>
                  ))}
                </tbody>
              </Table>
              <div className="table-pagination-footer">
                <span className="table-record-length">
                  Showing 1 of 1 entries
                </span>
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
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default IncomeTaxTable
