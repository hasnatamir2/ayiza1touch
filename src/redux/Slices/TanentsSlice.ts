import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Tenant {
  name: string
  email: string
  phoneNumber: string
  type: string
  industry: string
  country: string
  currency: string
  timezone: any
  amount: number
}

interface TenantsState {
  tenants: Tenant[]
  isLoading: boolean
}

const initialState: TenantsState = {
  tenants: [],

  isLoading: false,
}

export const TenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<any>) => {
      state.tenants.push(action.payload)
    },
    resetValues: (state) => {
      state.tenants = []
    },
  },
})

export const { setValues, resetValues } = TenantsSlice.actions
export default TenantsSlice.reducer