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
    <div className="py-2 px-4 d-flex justify-content-center mb-5">
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
                {isLoading ? <Spinner animation="border" /> : 'Save Tax Values'}
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <>
            <Row className="justify-content-center">
              <Col sm={7}>
                <Form
                  noValidate
                  validated={Object.keys(errors).length > 0}
                  className="center-form m-auto"
                  style={{ maxWidth: 750 }}
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
                            value: /^[a-z]{2}[0-9]{6}[a-z]{1}$/gim,
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
                  <Form.Group
                    as={Row}
                    controlId="businessName"
                    className="mt-2"
                  >
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

                  <Form.Group
                    as={Row}
                    controlId="incomeTurnover"
                    className="mt-2"
                  >
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
                              File Consolidated Expenses
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
                              <span className="muted">
                                Consolidated Expenses
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
                        {errors.consolidatedExpenses && (
                          <Form.Control.Feedback type="invalid">
                            {errors.consolidatedExpenses.message}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Form.Group>
                  ) : (
                    <>
                      <Row>
                        <Col sm={3}></Col>
                        <Col sm={4}>
                          <h6 className="text-center text-muted">Allowable</h6>
                        </Col>
                        <Col sm={4}>
                          <h6 className="text-center text-muted">
                            Dis-Allowable
                          </h6>
                        </Col>
                      </Row>
                      <Form.Group
                        as={Row}
                        controlId="goodsBought"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Cost of Goods Bought
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.goodsBought_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('goodsBought_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Goods Bought must be positive number',
                              },
                            })}
                          />
                          {errors.goodsBought_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.goodsBought_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.goodsBought_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('goodsBought_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Goods Bought must be positive number',
                              },
                            })}
                          />
                          {errors.goodsBought_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.goodsBought_disallow.message}
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
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.paymentsToSubcontractors_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput(
                              'paymentsToSubcontractors_allow',
                              {
                                pattern: {
                                  value: /^[+]?\d+([.]\d+)?$/,
                                  message:
                                    'CIS Payments to SubContractors must be positive number',
                                },
                              }
                            )}
                          />
                          {errors.paymentsToSubcontractors_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.paymentsToSubcontractors_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.paymentsToSubcontractors_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput(
                              'paymentsToSubcontractors_disallow',
                              {
                                pattern: {
                                  value: /^[+]?\d+([.]\d+)?$/,
                                  message:
                                    'CIS Payments to SubContractors must be positive number',
                                },
                              }
                            )}
                          />
                          {errors.paymentsToSubcontractors_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.paymentsToSubcontractors_disallow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="staffCosts"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Staff Costs
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.staffCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('staffCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Staff Costs must be positive number',
                              },
                            })}
                          />
                          {errors.staffCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.staffCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.staffCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('staffCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Staff Costs must be positive number',
                              },
                            })}
                          />
                          {errors.staffCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.staffCosts_disallow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="travelCosts"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Travel Costs
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.travelCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('travelCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Travel Costs must be positive number',
                              },
                            })}
                          />
                          {errors.travelCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.travelCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.travelCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('travelCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Travel Costs must be positive number',
                              },
                            })}
                          />
                          {errors.travelCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.travelCosts_disallow.message}
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
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.premisesRunningCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('premisesRunningCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Premises Running Costs must be positive number',
                              },
                            })}
                          />
                          {errors.premisesRunningCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.premisesRunningCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.premisesRunningCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('premisesRunningCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Premises Running Costs must be positive number',
                              },
                            })}
                          />
                          {errors.premisesRunningCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.premisesRunningCosts_disallow.message}
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
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.maintenanceCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('maintenanceCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Maintenance Costs must be positive number',
                              },
                            })}
                          />
                          {errors.maintenanceCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.maintenanceCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.maintenanceCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('maintenanceCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Maintenance Costs must be positive number',
                              },
                            })}
                          />
                          {errors.maintenanceCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.maintenanceCosts_disallow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="adminCosts"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Admin Costs
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.adminCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('adminCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Admin Costs must be positive number',
                              },
                            })}
                          />
                          {errors.adminCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.adminCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.adminCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('adminCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Admin Costs must be positive number',
                              },
                            })}
                          />
                          {errors.adminCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.adminCosts_disallow.message}
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
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.advertisingCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('advertisingCosts_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Advertising Costs must be positive number',
                              },
                            })}
                          />
                          {errors.advertisingCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.advertisingCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.advertisingCosts_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('advertisingCosts_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Advertising Costs must be positive number',
                              },
                            })}
                          />
                          {errors.advertisingCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.advertisingCosts_disallow.message}
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
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.businessEntertainmentCosts_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput(
                              'businessEntertainmentCosts_allow',
                              {
                                pattern: {
                                  value: /^[+]?\d+([.]\d+)?$/,
                                  message:
                                    'Business Entertainment Costs must be positive number',
                                },
                              }
                            )}
                          />
                          {errors.businessEntertainmentCosts_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.businessEntertainmentCosts_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={
                              errors.businessEntertainmentCosts_disallow
                            }
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput(
                              'businessEntertainmentCosts_disallow',
                              {
                                pattern: {
                                  value: /^[+]?\d+([.]\d+)?$/,
                                  message:
                                    'Business Entertainment Costs must be positive number',
                                },
                              }
                            )}
                          />
                          {errors.businessEntertainmentCosts_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {
                                errors.businessEntertainmentCosts_disallow
                                  .message
                              }
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="interest"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Interest
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.interest_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('interest_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Interest must be positive number',
                              },
                            })}
                          />
                          {errors.interest_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.interest_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.interest_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('interest_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message: 'Interest must be positive number',
                              },
                            })}
                          />
                          {errors.interest_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.interest_disallow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        controlId="financialCharges-allow"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Financial Charges
                        </Form.Label>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.financialCharges_allow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('financialCharges_allow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Financial Charges must be positive number',
                              },
                            })}
                          />
                          {errors.financialCharges_allow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.financialCharges_allow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                        <Col sm={4}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.financialCharges_disallow}
                            autoFill={false}
                            disabled={disableMode}
                            className="clear-input"
                            {...registerInput('financialCharges_disallow', {
                              pattern: {
                                value: /^[+]?\d+([.]\d+)?$/,
                                message:
                                  'Financial Charges must be positive number',
                              },
                            })}
                          />
                          {errors.financialCharges_disallow && (
                            <Form.Control.Feedback type="invalid">
                              {errors.financialCharges_disallow.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </>
                  )}
                </Form>
              </Col>
              <Col sm={2}>
                <Button className="btn btn-blue mt-2">Get Business Name</Button>
              </Col>
            </Row>
          </>
        </Card.Body>
      </Card>
    </div>
  )
}

export default IncomeTaxForm
