import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import CompanyService from '../../services/CompanyService'

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

export const fetchCompany = createAsyncThunk(
  'company/fetchCompany',
  async () => {
    return await CompanyService.getCompany()
  }
)

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
    [fetchCompany.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchCompany.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.companies = [...state.companies, action.payload]
    },
    [fetchCompany.rejected.type]: (state) => {
      state.isLoading = false
    },
  },
})

export const { setValues, resetValues } = companySlice.actions
export default companySlice.reducer
