import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap.css'
import './styles/custom.css'

import { Routes, Route } from 'react-router-dom'
import GuestRoute from './routes/GuestRoute'
import AdminRoute from './routes/AdminRoute'

import HomeContainer from './containers/Home/HomeContainer'

import LoginContainer from './containers/Auth/Login/LoginContainer'

import CompanyCodeContainer from './containers/CompanyCode/CompanyCodeContainer'
import AddCompanyCodeContainer from './containers/CompanyCode/AddCompanyCodeContainer'

// Admin Panel
import AdminPanelContainer from './containers/AdminPanel/AdminPanelContainer'
import TenantsContainer from './containers/Tenants/TenantsContainer'

import AddTenantContainer from './containers/Tenants/AddTenantContainer'

const App = () => {
  return (
      <Routes>
        <Route path="login" element={<LoginContainer />} />
        <Route path="/" element={<GuestRoute />}>
          <Route index element={<HomeContainer />} />
          <Route path="companyCode" element={<CompanyCodeContainer />} />
          <Route path="addCompanyCode" element={<AddCompanyCodeContainer />} />
        </Route>
        <Route path="/adminPanel" element={<AdminRoute />}>
          <Route index element={<AdminPanelContainer />} />
          <Route path="tenants" element={<TenantsContainer />} />
          <Route path="addTenant" element={<AddTenantContainer />} />
        </Route>
      </Routes>
  )
}

export default App
