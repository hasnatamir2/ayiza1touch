import { Spinner, Card, Form, Row, Col, Button } from 'react-bootstrap'

const CompanyForm = ({
    handleFormSubmit,
    formHookSubmit,
    registerInput,
    errors,
    isLoading,
}: any) => {

    return (
        <Card>
            <Card.Header>Company register</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Form
                        onSubmit={formHookSubmit(handleFormSubmit)}
                        noValidate
                        validated={Object.keys(errors).length > 0}
                    >
                        <Row>
                            <Form.Group as={Col} sm={6} controlId="formBusinessName">
                                <Form.Label>Business name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Business name"
                                    // defaultValue={values.businessName}
                                    required
                                    {...registerInput('businessName', { required: true })}
                                />
                                {errors?.businessName?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Business name is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessType">
                                <Form.Label>Type of Business</Form.Label>
                                <Form.Control
                                    as="select"
                                    type="text"
                                    placeholder="Business type"
                                    required
                                    // defaultValue={values.businessType}
                                    {...registerInput('businessType', { required: true })}
                                >
                                    <option>Select1</option>
                                    <option>Select2</option>
                                    <option>Select3</option>
                                </Form.Control>
                                {errors?.businessType?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Business type is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessIndustry">
                                <Form.Label>Industry</Form.Label>
                                <Form.Control
                                    as="select"
                                    type="select"
                                    placeholder="Business industry"
                                    required
                                    // defaultValue={values.industry}
                                    {...registerInput('industry', { required: true })}
                                >
                                    <option>Industry1</option>
                                    <option>Industry2</option>
                                    <option>Industry3</option>
                                </Form.Control>
                                {errors?.industry?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Business industry is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>

                            <Form.Group as={Col} sm={6} controlId="formBusinessCountry">
                                <Form.Label>Country</Form.Label>
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

                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessCurrency">
                                <Form.Label>Currency</Form.Label>
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
                                {errors?.currency?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Business currency is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessTimeZone">
                                <Form.Label>Time Zone</Form.Label>
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
                                {errors?.timezone?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Time zone is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessFinancialYear">
                                <Form.Label>Financial Year</Form.Label>
                                <Form.Control
                                    as="select"
                                    type="text"
                                    placeholder="Financial Year"
                                    required
                                    // defaultValue={values.financialYear}
                                    {...registerInput('financialYear', {
                                        required: true,
                                    })}
                                >
                                    <option>Select1</option>
                                    <option>Select2</option>
                                    <option>Select3</option>
                                </Form.Control>
                                {errors?.financialYear?.type === 'required' && (
                                    <Form.Control.Feedback type="invalid">
                                        Financial year is required
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            <Form.Group as={Col} sm={6} controlId="formBusinessCalculateVAT">
                                <Form.Label> </Form.Label>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Calculate VAT"
                                    as="input"
                                    {...registerInput('calculateVAT')}
                                />
                            </Form.Group>
                            <Col className="mt-4">
                                <Button type="submit" disabled={isLoading}>
                                    {isLoading ? <Spinner animation="border" /> : "Save"}
                                </Button>
                            </Col>
                            

                        </Row>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CompanyForm