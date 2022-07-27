import {
  Spinner,
  Card,
  Form,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'

const IncomeTaxForm = (props: any) => {
  const {
    handleFormSubmit,
    formHookSubmit,
    registerInput,
    errors,
    isLoading,
    navigate,
    disableMode,
    consolidatedExpenses,
    getValues,
  } = props
  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>File Income Tax</span>
            <div>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => navigate(-1)}
                variant="outline-secondary"
                className="btn back-but"
              >
                {isLoading ? <Spinner animation="border" /> : 'Back'}
              </Button>
              <Button
                type="submit"
                onClick={formHookSubmit(handleFormSubmit)}
                variant="outline-success"
                className="btn save-but"
                disabled={disableMode}
              >
                {isLoading ? (
                  <Spinner animation="border" />
                ) : (
                  'Submit Periodic Update'
                )}
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <>
            <Form
              noValidate
              validated={Object.keys(errors).length > 0}
              className="center-form m-auto"
            >
              <Form.Group as={Row} controlId="NINumber" className="mt-2">
                <Form.Label column sm={3}>
                  NI Number
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    isInvalid={errors.NINumber}
                    autoFill={false}
                    disabled={disableMode}
                    {...registerInput('NINumber', {
                      required: {
                        value: true,
                        message: 'NI Number is required',
                      },
                      pattern: {
                        value: /^[a-z]{2}.*[a-z]$/gim,
                        message: 'NI Number is invalid',
                      },
                    })}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">NI Number</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.NINumber && (
                    <Form.Control.Feedback type="invalid">
                      {errors.NINumber.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="dateFrom" className="mt-2">
                <Form.Label column sm={3}>
                  Date from
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    required
                    isInvalid={errors.dateFrom}
                    disabled={disableMode}
                    {...registerInput('dateFrom', {
                      required: {
                        value: true,
                        message: 'Date from is required',
                      },
                      valueAsDate: true,
                    })}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">Date from</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.dateFrom && (
                    <Form.Control.Feedback type="invalid">
                      {errors.dateFrom.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="dateTo" className="mt-2">
                <Form.Label column sm={3}>
                  Date to
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="date"
                    required
                    isInvalid={errors.dateTo}
                    autoFill={false}
                    disabled={disableMode}
                    {...registerInput('dateTo', {
                      required: {
                        value: true,
                        message: 'Date to is required',
                      },
                      valueAsDate: true,
                      deps: ['dateTo'],
                      validate: {
                        lessThan18Months: (value: any) => {
                          const dateFrom = getValues('dateFrom')
                          const dateTo = getValues('dateTo')
                          if (dateFrom && dateTo) {
                            const diff = Math.abs(
                              dateTo.getTime() - dateFrom.getTime()
                            )
                            const diffDays = Math.ceil(
                              diff / (1000 * 3600 * 24)
                            )
                            if (diffDays > 18) {
                              return 'Date to must be less than 18 months'
                            }
                          }
                        },
                      },
                    })}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">Date to</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.dateTo && (
                    <Form.Control.Feedback type="invalid">
                      {errors.dateTo.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="incomeTurnover" className="mt-2">
                <Form.Label column sm={3}>
                  Income Turnover
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    isInvalid={errors.incomeTurnover}
                    autoFill={false}
                    disabled={disableMode}
                    {...registerInput('incomeTurnover', {
                      required: {
                        value: true,
                        message: 'Income Turnover is required',
                      },
                      pattern: {
                        value: /^[+]?\d+([.]\d+)?$/,
                        message: 'Income Tunrover must be positive decimal',
                      },
                    })}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">Income Turnover</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.incomeTurnover && (
                    <Form.Control.Feedback type="invalid">
                      {errors.incomeTurnover.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="incomeOther" className="mt-2">
                <Form.Label column sm={3}>
                  Income Other
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    required
                    isInvalid={errors.incomeOther}
                    autoFill={false}
                    disabled={disableMode}
                    {...registerInput('incomeOther', {
                      required: {
                        value: true,
                        message: 'Income Other is required',
                      },
                      pattern: {
                        value: /^[+]?\d+([.]\d+)?$/,
                        message: 'Income Other must be positive decimal',
                      },
                    })}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">Income Other</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.incomeOther && (
                    <Form.Control.Feedback type="invalid">
                      {errors.incomeOther.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="fileConsolidatedExpenses"
                className="mt-2"
              >
                <Form.Label column sm={3}>
                  File Consolidated Expenses
                </Form.Label>
                <Col sm={8} className="mt-2">
                  <Form.Check
                    type="switch"
                    as="input"
                    className="custom-switch ay_switch"
                    variant="success"
                    disabled={disableMode}
                    {...registerInput('fileConsolidatedExpenses')}
                  />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">
                          If VAT is calculated net of discount for sales,
                          activate this
                        </span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                </Col>
              </Form.Group>

              {consolidatedExpenses ? (
                <Form.Group
                  as={Row}
                  controlId="consolidatedExpenses"
                  className="mt-2"
                >
                  <Form.Label column sm={3}>
                    Consolidated Expenses
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      required
                      isInvalid={errors.consolidatedExpenses}
                      autoFill={false}
                      disabled={disableMode}
                      {...registerInput('consolidatedExpenses', {
                        required: {
                          value: true,
                          message: 'Consolidated Expenses is required',
                        },
                        pattern: {
                          value: /^\d*\.?\d*$/,
                          message: 'Consolidated Expenses must be number',
                        },
                      })}
                    />
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip>
                          <span className="muted">Consolidated Expenses</span>
                        </Tooltip>
                      }
                    >
                      <span
                        className="help-tp"
                        data-toggle="tooltip"
                        data-placement="bottom"
                      >
                        i
                      </span>
                    </OverlayTrigger>
                    {errors.consolidatedExpenses && (
                      <Form.Control.Feedback type="invalid">
                        {errors.consolidatedExpenses.message}
                      </Form.Control.Feedback>
                    )}
                  </Col>
                </Form.Group>
              ) : (
                <>
                  <Form.Group as={Row} controlId="goodsBought" className="mt-2">
                    <Form.Label column sm={3}>
                      Cost of Goods Bought
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.goodsBought}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('goodsBought', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message: 'Goods Bought must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Cost of Goods Bought</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.goodsBought && (
                        <Form.Control.Feedback type="invalid">
                          {errors.goodsBought.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="paymentsToSubcontractors"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      CIS Payments to SubContractors
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.paymentsToSubcontractors}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('paymentsToSubcontractors', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'CIS Payments to SubContractors must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">
                              CIS Payments to SubContractors
                            </span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.paymentsToSubcontractors && (
                        <Form.Control.Feedback type="invalid">
                          {errors.paymentsToSubcontractors.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="staffCosts" className="mt-2">
                    <Form.Label column sm={3}>
                      Staff Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.staffCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('staffCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message: 'Staff Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Staff Costs</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.staffCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.staffCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="travelCosts" className="mt-2">
                    <Form.Label column sm={3}>
                      Travel Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.travelCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('travelCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message: 'Travel Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Travel Costs</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.travelCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.travelCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="premisesRunningCosts"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      Premises Running Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.premisesRunningCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('premisesRunningCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'Premises Running Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">
                              Premises Running Costs
                            </span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.premisesRunningCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.premisesRunningCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="maintenanceCosts"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      Maintenance Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.maintenanceCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('maintenanceCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'Maintenance Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Maintenance Costs</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.maintenanceCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.maintenanceCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="adminCosts" className="mt-2">
                    <Form.Label column sm={3}>
                      Admin Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.adminCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('adminCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message: 'Admin Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Admin Costs</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.adminCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.adminCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="advertisingCosts"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      Advertising Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.adminCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('advertisingCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'Advertising Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Advertising Costs</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.advertisingCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.advertisingCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="businessEntertainmentCosts"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      Business Entertainment Costs
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.businessEntertainmentCosts}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('businessEntertainmentCosts', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'Business Entertainment Costs must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">
                              Business Entertainment Costs
                            </span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.businessEntertainmentCosts && (
                        <Form.Control.Feedback type="invalid">
                          {errors.businessEntertainmentCosts.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="interest" className="mt-2">
                    <Form.Label column sm={3}>
                      Interest
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.interest}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('interest', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message: 'Interest must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Interest</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.interest && (
                        <Form.Control.Feedback type="invalid">
                          {errors.interest.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="financialCharges"
                    className="mt-2"
                  >
                    <Form.Label column sm={3}>
                      Financial Charges
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        isInvalid={errors.financialCharges}
                        autoFill={false}
                        disabled={disableMode}
                        {...registerInput('financialCharges', {
                          pattern: {
                            value: /^[+]?\d+([.]\d+)?$/,
                            message:
                              'Financial Charges must be positive number',
                          },
                        })}
                      />
                      <OverlayTrigger
                        placement="bottom"
                        overlay={
                          <Tooltip>
                            <span className="muted">Financial Charges</span>
                          </Tooltip>
                        }
                      >
                        <span
                          className="help-tp"
                          data-toggle="tooltip"
                          data-placement="bottom"
                        >
                          i
                        </span>
                      </OverlayTrigger>
                      {errors.financialCharges && (
                        <Form.Control.Feedback type="invalid">
                          {errors.financialCharges.message}
                        </Form.Control.Feedback>
                      )}
                    </Col>
                  </Form.Group>
                </>
              )}
              <Row className="justify-content-center my-2 mb-3">
                <Col sm={5}>
                  <Button className="btn btn-blue">Get Business Name</Button>
                </Col>
              </Row>

              <Form.Group as={Row} controlId="businessName" className="mt-2">
                <Form.Label column sm={3}>
                  Business name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="select"
                    as="select"
                    required
                    isInvalid={errors.businessName}
                    disabled={disableMode}
                    {...registerInput('businessName', {
                      required: {
                        value: true,
                        message: 'Business name is required',
                      },
                      deps: ['NINumber'],
                    })}
                  >
                    <option value="1">name</option>
                    <option value="1">name</option>
                    <option value="1">name</option>
                  </Form.Control>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">Business name</span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                  {errors.businessName && (
                    <Form.Control.Feedback type="invalid">
                      {errors.businessName.message}
                    </Form.Control.Feedback>
                  )}
                </Col>
              </Form.Group>
            </Form>
          </>
        </Card.Body>
      </Card>
    </div>
  )
}

export default IncomeTaxForm
