import { useState } from 'react'
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import CompanyForm from './CompanyForm'
import CompanyTable from './CompanyTable'

const Home = (props: any) => {
    const {
        companies,
        handleFormSubmit,
        formHookSubmit,
        registerInput,
        errors,
        isLoading,
    } = props

    return (
        <Container className='pt-2'>
            <CompanyForm 
                handleFormSubmit={handleFormSubmit}
                formHookSubmit={formHookSubmit}
                registerInput={registerInput}
                errors={errors}
                isLoading={isLoading}
            />
            <CompanyTable companies={companies} />
        </Container>
    )
}

export default Home
