import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_COMPANIES } from '../Types/CompanyTypes'

import CompanyService from '../../services/CompanyService'

export const fetchCompanies = createAsyncThunk(FETCH_COMPANIES, async () => {
  return await CompanyService.getCompany()
})
