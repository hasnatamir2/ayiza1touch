import { Spinner, Card, Form, Row, Col, Button } from 'react-bootstrap'

const CompanyForm = ({
  handleFormSubmit,
  formHookSubmit,
  registerInput,
  errors,
  isLoading,
}: any) => {
  return (
    <Card className="border-0">
      <Card.Header>
        <div className="card-header-content">
          <span>Add Company Codes</span>
          <Button
            type="submit"
            disabled={isLoading}
            onClick={formHookSubmit(handleFormSubmit)}
            variant="outline-success"
          >
            {isLoading ? <Spinner animation="border" /> : 'Save'}
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Form noValidate validated={Object.keys(errors).length > 0}>
            <Form.Group as={Row} controlId="formBusinessName" className="mt-2">
              <Form.Label column sm={3}>
                Business name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Business name"
                  required
                  feedbackTooltip
                  autoFill={false}
                  {...registerInput('businessName', {
                    required: true,
                    maxLength: 7,
                  })}
                />
                <Form.Text muted>Max: 7 Characters</Form.Text>
                {errors?.businessName?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business name is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBusinessType" className="mt-2">
              <Form.Label column sm={3}>
                Type of Business
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="Business type"
                  required
                  {...registerInput('businessType', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <Form.Text muted>Max: 70 Characters</Form.Text>
                {errors?.businessType?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business type is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessIndustry"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Industry
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Business industry"
                  required
                  {...registerInput('industry', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option>Industry1</option>
                  <option>Industry2</option>
                  <option>Industry3</option>
                </Form.Control>
                <Form.Text muted>Max: 70 Characters</Form.Text>
                {errors?.industry?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business industry is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCountry"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Country
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="Business country"
                  required
                  // defaultValue={values.country}
                  {...registerInput('country', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                {errors?.country?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business country is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCurrency"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Currency
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="Business Currency"
                  required
                  // defaultValue={values.currency}
                  {...registerInput('currency', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <Form.Text muted>Max: 7 Characters</Form.Text>
                {errors?.currency?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business currency is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessTimeZone"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Time Zone
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="Time Zone"
                  required
                  // defaultValue={values.timezone}
                  {...registerInput('timezone', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <Form.Text muted>Max: 7 Characters</Form.Text>
                {errors?.timezone?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Time zone is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessFinancialYear"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Financial Year
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="select"
                  type="text"
                  placeholder="Financial Year"
                  required
                  // defaultValue={values.financialYear}
                  {...registerInput('financialYear', {
                    required: true,
                    valueAsNumber: true,
                  })}
                >
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </Form.Control>
                <Form.Text muted>Max: 7 Characters</Form.Text>
                {errors?.financialYear?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Financial year is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCalculateVAT"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Calculate VAT
              </Form.Label>
              <Col sm={9}>
                <Form.Check
                  type="switch"
                  className="custom-switch"
                  as="input"
                  variant="success"
                  {...registerInput('calculateVAT')}
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CompanyForm
