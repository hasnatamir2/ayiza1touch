import './styles/styles.css'
import './styles/bootstrap.css'
import {
  Routes, Route
} from "react-router-dom";
import GuestRoute from './routes/GuestRoute';

import HomeContainer from './containers/home/HomeContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestRoute />} >
          <Route path="/" element={<HomeContainer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
