import { configureStore } from '@reduxjs/toolkit'

import CompanyCodeSlice from './Slices/CompanyCodeSlice'
import TenantsSlice from './Slices/TanentsSlice'

export const store = configureStore({
  reducer: {
    companyCode: CompanyCodeSlice,
    tenants: TenantsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
