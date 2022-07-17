import React from 'react'
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'

const CompanyForm = ({
    handleFormSubmit,
    formHookSubmit,
    registerInput,
    errors,
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
                        <Form.Group as={Row} controlId="formBusinessName">
                            <Form.Label sm={4}>Business name</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessType">
                            <Form.Label sm={4}>Type of Business</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessIndustry">
                            <Form.Label sm={4}>Industry</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessCountry">
                            <Form.Label sm={4}>Country</Form.Label>
                            <Col sm={8}>
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
                        <Form.Group as={Row} controlId="formBusinessCurrency">
                            <Form.Label sm={4}>Currency</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessTimeZone">
                            <Form.Label sm={4}>Time Zone</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessFinancialYear">
                            <Form.Label sm={4}>Financial Year</Form.Label>
                            <Col sm={8}>
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
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formBusinessCalculateVAT">
                            <Col sm={8}>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Calculate VAT"
                                    as="input"
                                    {...registerInput('calculateVAT')}
                                />
                            </Col>
                        </Form.Group>

                        <Button type="submit">Submit Company</Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CompanyForm