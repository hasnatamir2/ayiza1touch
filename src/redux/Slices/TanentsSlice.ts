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
    setTenants: (state, action: PayloadAction<any>) => {
      state.tenants = action.payload
    },
    resetTenants: (state) => {
      state.tenants = []
    },
  },
})

export const { setTenants, resetTenants } = TenantsSlice.actions
export default TenantsSlice.reducer