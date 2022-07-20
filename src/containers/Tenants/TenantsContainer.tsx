import Tenants from '../../components/tenants/Tenants'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TenantsContainer = () => {
  const navigate = useNavigate()

  const { tenants, isLoading } = useSelector((state: any) => state.tenants)
  return <Tenants tenants={tenants} isLoading={isLoading} Navigate={navigate} />
}

export default TenantsContainer
