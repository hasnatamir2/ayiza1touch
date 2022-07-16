import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CompanyState {
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: any
  financialYear: any
  calculateVAT: any
}

const initialState: CompanyState = {
  businessName: '',
  businessType: '',
  industry: '',
  country: '',
  currency: '',
  timezone: null,
  financialYear: null,
  calculateVAT: null,
}

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<any>) => {
      state = action.payload
    },
    resetValues: (state) => {
        state = initialState
    }
  },
})

export const { setValues, resetValues } = companySlice.actions;
export default companySlice.reducer