import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Home from '../../components/home/Home'
import { setValues } from '../../redux/Slices/CompanySlice'
import { useForm } from 'react-hook-form'

const HomeContainer: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const {companies, isLoading} = useSelector((state: any) => state.company)
    const dispatch = useDispatch()

    const handleFormSubmit = (values: any) => {
        dispatch(setValues(values))
    }

    return (
        <Home
            companies={companies}
            handleFormSubmit={handleFormSubmit}
            formHookSubmit={handleSubmit}
            registerInput={register}
            errors={errors}
            isLoading={isLoading}
        />
    )
}

export default HomeContainer
