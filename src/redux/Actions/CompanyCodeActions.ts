import { createAsyncThunk } from '@reduxjs/toolkit'
import { FETCH_COMPANIES } from '../Types/CompanyCodeTypes'

import CompanyCodeService from '../../services/CompanyCodeService'

export const fetchCompanies = createAsyncThunk(FETCH_COMPANIES, async () => {
  return await CompanyCodeService.getCompany()
})
