import React from 'react'
import { Table, Container } from 'react-bootstrap'

const CompanyTable = (props: any) => {
    const { companies } = props
    return (
        <Table striped bordered>
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
                            <td>{company.calculateVAT ? 'True' : 'False'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default CompanyTable;