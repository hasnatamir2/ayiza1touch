import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CompanyService from '../../services/CompanyCodeService'
import { fetchCompanies } from '../Actions/CompanyCodeActions'

interface CompanyCode {
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: any
  financialYear: any
  calculateVAT: boolean
}

export interface CompanyCodeState {
  companies: CompanyCode[]
  isLoading: boolean
}

const initialState: CompanyCodeState = {
  companies: [],

  isLoading: false,
}

export const CompanyCodeSlice = createSlice({
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

export const { setValues, resetValues } = CompanyCodeSlice.actions
export default CompanyCodeSlice.reducer
