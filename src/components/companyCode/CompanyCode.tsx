import { Container } from "react-bootstrap"
import CompanyTable from "./CompanyTable"
import CompanyForm from "./CompanyForm"

const CompanyCode = (props: any) => {
    const {
        companies,
        handleFormSubmit,
        formHookSubmit,
        registerInput,
        errors,
        isLoading,
        navigate,
    } = props

    return (
        <Container className='pt-2'>
            <CompanyForm 
                handleFormSubmit={handleFormSubmit}
                formHookSubmit={formHookSubmit}
                registerInput={registerInput}
                errors={errors}
                isLoading={isLoading}
                navigate={navigate}
            />
        </Container>
    )
}

export default CompanyCode
