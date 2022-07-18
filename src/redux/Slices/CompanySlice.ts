import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CompanyService from '../../services/CompanyService'
import { fetchCompanies } from '../Actions/CompanyActions'

interface Company {
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: any
  financialYear: any
  calculateVAT: boolean
}

export interface CompanyState {
  companies: Company[]
  isLoading: boolean
}

const initialState: CompanyState = {
  companies: [],

  isLoading: false,
}

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<any>) => {
      state.companies.push(action.payload)
    },
    resetValues: (state) => {
      state.companies = []
    },
  },
  extraReducers: {
    [fetchCompanies.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchCompanies.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.companies = [...state.companies, action.payload]
    },
    [fetchCompanies.rejected.type]: (state) => {
      state.isLoading = false
    },
  },
})

export const { setValues, resetValues } = companySlice.actions
export default companySlice.reducer
