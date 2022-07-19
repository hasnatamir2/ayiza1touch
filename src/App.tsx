import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.css'
import './styles/custom.css'

import {
  Routes, Route
} from "react-router-dom";
import GuestRoute from './routes/GuestRoute';

import HomeContainer from './containers/Home/HomeContainer';
import LoginContainer from './containers/Auth/Login/LoginContainer';
import CompanyCodeContainer from './containers/CompanyCode/CompanyCodeContainer';
import AddCompanyCodeContainer from './containers/CompanyCode/AddCompanyCodeContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestRoute />} >
          <Route index element={<HomeContainer />} />
          <Route path="login" element={<LoginContainer />} />
          <Route path="companyCode" element={<CompanyCodeContainer />} />
          <Route path="addCompanyCode" element={<AddCompanyCodeContainer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
